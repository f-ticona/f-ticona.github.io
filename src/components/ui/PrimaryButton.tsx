import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface PrimaryButtonProps {
  children: ReactNode;
  icon?: LucideIcon;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  icon: Icon,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    bg-abisal-500 text-tinta-900
    font-source-code font-medium text-base
    px-8 py-3.5 rounded-xl
    shadow-[0_4px_16px_rgba(61,141,181,0.3)]
    hover:bg-abisal-400 hover:scale-[1.02]
    active:scale-[0.98]
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
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
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
}
