interface BadgeProps {
  children: React.ReactNode;
  variant?: "abisal";
}

export function Badge({ children, variant = "abisal" }: BadgeProps) {
  const variants = {
    abisal:
      "bg-abisal-500/10 text-abisal-300 border-abisal-500/30",
  };

  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full border text-xs font-medium uppercase tracking-[2px] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
