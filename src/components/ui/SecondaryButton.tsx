import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface SecondaryButtonProps {
  children: ReactNode;
  icon?: LucideIcon;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({
  children,
  icon: Icon,
  href,
  onClick,
  className = "",
}: SecondaryButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    bg-transparent text-blanco-roto-50
    border border-tinta-700
    font-source-code font-medium text-base
    px-8 py-3.5 rounded-xl
    hover:border-abisal-500 hover:text-abisal-400
    transition-all duration-300
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children}
        {Icon && <Icon size={16} />}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
}
