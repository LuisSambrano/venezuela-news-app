"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Newspaper, Users, ShieldAlert, LogOut, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Noticias", href: "/admin/news", icon: Newspaper },
  { label: "Prisioneros", href: "/admin/prisoners", icon: ShieldAlert },
  { label: "Usuarios", href: "/admin/users", icon: Users, roles: ["admin"] },
  { label: "Logs", href: "/admin/logs", icon: FileText, roles: ["admin"] },
];

export default function Sidebar({ userRole }: { userRole: string }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between p-6">
      <div className="space-y-8">
        {/* LOGO */}
        <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-zinc-100 dark:bg-black shadow-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0%,transparent_70%)] opacity-30" />
                <span className="font-black text-[10px] tracking-tighter text-zinc-900 dark:text-white relative z-10">M&T</span>
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white">Admin Console</span>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            if (item.roles && !item.roles.includes(userRole)) return null;
            
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 font-bold"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                )}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* FOOTER */}
      <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6 space-y-4">
        <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700/50">
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Role</p>
            <p className="text-xs font-medium text-zinc-900 dark:text-zinc-200 capitalize mt-0.5">{userRole}</p>
        </div>
        <button className="flex items-center gap-3 px-4 py-2 text-xs font-medium text-red-500 hover:text-red-600 transition-colors w-full">
            <LogOut size={16} />
            Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
