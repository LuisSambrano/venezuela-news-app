import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default async function CMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  // Double check profile role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || (profile.role !== "admin" && profile.role !== "editor")) {
    redirect("/"); // Unauthorized
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-400 font-mono dark selection:bg-red-500/20 selection:text-red-200">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('/grid.svg')] opacity-[0.03] bg-[size:50px_50px]" />

      <Sidebar userRole={profile.role} />
      <main className="flex-1 p-8 overflow-y-auto max-h-screen relative z-10">
        <div className="max-w-7xl mx-auto space-y-8">{children}</div>
      </main>
    </div>
  );
}
