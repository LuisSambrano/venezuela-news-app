import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "hover" | "flat";
  noNoise?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  noNoise = false,
  ...props 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-zinc-200 dark:border-white/5",
        "bg-white/80 dark:bg-zinc-950/60 backdrop-blur-xl",
        "shadow-sm transition-all duration-300",
        variant === "hover" && "hover:border-zinc-300 dark:hover:border-white/10 hover:shadow-xl hover:-translate-y-1",
        variant === "flat" && "shadow-none bg-transparent border-transparent",
        className
      )}
      {...props}
    >
      {!noNoise && (
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwIiB5PSIwIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgICAgPGZlQmxlbmQgbW9kZT0ic2NyZWVuIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
