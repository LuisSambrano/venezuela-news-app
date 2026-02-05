"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainLayoutSpacer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={cn("min-h-screen", !isHome && "pt-24 md:pt-32")}>
      {children}
    </main>
  );
}
