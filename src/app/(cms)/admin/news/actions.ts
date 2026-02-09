'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Deletes an article by its ID.
 * Only accessible from the admin panel.
 */
export async function deleteArticle(formData: FormData) {
  const supabase = await createClient();
  const id = formData.get("id") as string;

  const { error } = await supabase.from("articles").delete().eq("id", id);

  if (error) {
    throw new Error("Failed to delete article");
  }

  revalidatePath("/admin/news");
}

/**
 * Creates a new article from the CMS form.
 * Auto-generates slug from title and sets source as 'manual'.
 */
export async function createArticle(formData: FormData) {
    const supabase = await createClient();
    
    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const image_url = formData.get("image_url") as string;

    const slug = title.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
        .slice(0, 80);

    const { error } = await supabase.from("articles").insert({
        title,
        subtitle,
        content,
        category,
        image_url,
        slug,
        author: "M&T Intelligence",
        published_at: new Date().toISOString(),
        source: "manual",
        published: true,
    });

    if (error) {
        console.error(error);
        throw new Error("Failed to create article");
    }

    revalidatePath("/admin/news");
    redirect("/admin/news");
}

/**
 * Updates an existing article. Supports partial updates.
 */
export async function updateArticle(formData: FormData) {
    const supabase = await createClient();
    const id = formData.get("id") as string;

    const updates: Record<string, unknown> = {
        title: formData.get("title") as string,
        subtitle: formData.get("subtitle") as string,
        content: formData.get("content") as string,
        category: formData.get("category") as string,
        image_url: formData.get("image_url") as string,
        updated_at: new Date().toISOString(),
    };

    // Regenerate slug if title changed
    if (updates.title) {
        updates.slug = (updates.title as string)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-')
            .slice(0, 80);
    }

    const { error } = await supabase
        .from("articles")
        .update(updates)
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Failed to update article");
    }

    revalidatePath("/admin/news");
    redirect("/admin/news");
}

/**
 * Toggles the published status of an article.
 * Used from the admin table for quick draft/publish toggling.
 */
export async function togglePublished(formData: FormData) {
    const supabase = await createClient();
    const id = formData.get("id") as string;
    const currentStatus = formData.get("published") === "true";

    const { error } = await supabase
        .from("articles")
        .update({ published: !currentStatus, updated_at: new Date().toISOString() })
        .eq("id", id);

    if (error) {
        throw new Error("Failed to toggle article status");
    }

    revalidatePath("/admin/news");
}
