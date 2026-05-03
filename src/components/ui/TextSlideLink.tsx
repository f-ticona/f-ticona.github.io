interface TextSlideLinkProps {
  children: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export function TextSlideLink({
  children,
  href,
  onClick,
  className = "",
}: TextSlideLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-block overflow-hidden ${className}`}
    >
      <span className="flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2">
        <span className="block py-0.5">{children}</span>
        <span className="block py-0.5 text-violet-600">{children}</span>
      </span>
    </a>
  );
}
