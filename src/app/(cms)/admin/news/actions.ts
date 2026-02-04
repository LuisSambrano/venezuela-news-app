'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteArticle(formData: FormData) {
  const supabase = await createClient();
  const id = formData.get("id") as string;

  const { error } = await supabase.from("articles").delete().eq("id", id);

  if (error) {
    throw new Error("Failed to delete article");
  }

  revalidatePath("/admin/news");
}

export async function createArticle(formData: FormData) {
    const supabase = await createClient();
    
    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const image_url = formData.get("image_url") as string;

    const slug = title.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');

    const { error } = await supabase.from("articles").insert({
        title,
        subtitle,
        content,
        category,
        image_url,
        slug,
        author: "M&T Intelligence", // Default for MVP
        published_at: new Date().toISOString()
    });

    if (error) {
        console.error(error);
        throw new Error("Failed to create article");
    }

    revalidatePath("/admin/news");
    redirect("/admin/news");
}
