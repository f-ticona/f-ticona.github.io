interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "violet";
}

export function Badge({ children, variant = "violet" }: BadgeProps) {
  const variants = {
    orange:
      "bg-orange-500/10 text-orange-600 border-orange-500/20",
    violet:
      "bg-violet-600/10 text-violet-700 border-violet-600/20",
  };

  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-[2px] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
