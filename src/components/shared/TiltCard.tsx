import { useMouseTilt } from "../../hooks/useMousePosition";
import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const { ref, tilt, isHovering, handlers } = useMouseTilt(8);

  return (
    <div
      ref={ref}
      {...handlers}
      className={`relative transition-shadow duration-400 ${className}`}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: isHovering
          ? "transform 0.1s ease-out"
          : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[24px]"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(124,58,237,0.1) 0%, transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
