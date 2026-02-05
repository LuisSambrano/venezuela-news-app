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
    <aside className="w-64 bg-zinc-950/50 backdrop-blur-xl border-r border-white/5 flex flex-col justify-between p-6 relative z-20">
      <div className="space-y-8">
        {/* LOGO - PROTOCOL ZERO */}
        <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black shadow-lg shadow-blue-900/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0%,transparent_70%)] opacity-50" />
                <span className="font-black text-[10px] tracking-tighter text-white relative z-10">M&T</span>
            </div>
            <div>
                <span className="block font-bold text-sm tracking-tight text-white leading-none">M&T Venezuela</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-bold">Panel Admin</span>
            </div>
        </div>

        {/* NAVIGATION - TERMINAL STYLE */}
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
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono transition-all duration-200 group relative overflow-hidden",
                  isActive
                    ? "text-white bg-white/5 border border-white/5 shadow-inner"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                )}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />}
                <Icon size={16} className={cn("transition-colors", isActive ? "text-blue-400" : "text-zinc-600 group-hover:text-zinc-400")} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* FOOTER - USER IDENTITY */}
      <div className="border-t border-white/5 pt-6 space-y-4">
        <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between group cursor-help">
            <div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold group-hover:text-blue-400 transition-colors">Usuario</p>
                <p className="text-xs font-mono text-zinc-300 capitalize mt-0.5">{userRole}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        </div>
        <button className="flex items-center gap-3 px-4 py-2 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors w-full uppercase tracking-widest">
            <LogOut size={14} />
            Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
