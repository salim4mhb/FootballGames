import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 active:scale-[0.98]",
  secondary:
    "border border-[var(--border-accent)] text-[var(--text-secondary)] hover:text-white hover:border-white/30 active:scale-[0.98]",
  ghost: "text-[var(--text-secondary)] hover:text-white hover:bg-white/5",
  danger: "bg-red-500/10 text-red-400 hover:bg-red-500/20",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
