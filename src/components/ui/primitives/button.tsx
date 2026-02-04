import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'glass' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20",
      glass: "glass text-foreground hover:bg-primary/10 border-primary/20",
      ghost: "hover:bg-accent hover:text-accent-foreground shadow-none",
      outline: "border border-border bg-transparent hover:bg-accent shadow-none",
    }

    const sizes = {
      sm: "h-9 px-4 text-micro",
      md: "h-11 px-6 text-caption",
      lg: "h-14 px-10 text-body",
      hero: "h-20 px-16 text-subtitle font-bold tracking-tighter",
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
