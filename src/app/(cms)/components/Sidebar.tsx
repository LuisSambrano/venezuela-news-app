"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Newspaper, Users, ShieldAlert, LogOut, FileText, Shield } from "lucide-react"; // Added Shield import
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
        {/* LOGO */}
        <Link href="/" className="mb-8 flex items-center gap-3 px-2 group hover:opacity-80 transition-opacity">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-zinc-700 shadow-xl overflow-hidden group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
             <Shield className="h-5 w-5 text-zinc-100 relative z-10 group-hover:scale-110 transition-transform duration-500" />
             <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
          </div>
          <div>
            <h1 className="font-sans text-sm font-bold text-zinc-100 tracking-wide">
              M&T<span className="text-blue-500">.</span>
            </h1>
            <p className="font-mono text-[10px] text-zinc-500 tracking-wider font-medium">
              PANEL ADMIN
            </p>
          </div>
        </Link>

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
