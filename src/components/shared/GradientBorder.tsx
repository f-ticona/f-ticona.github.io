import type { ReactNode } from "react";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
}

export function GradientBorder({ children, className = "" }: GradientBorderProps) {
  return (
    <div
      className={`p-[2px] rounded-[24px] ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #2a2e35, #3d8db5, #2a2e35, #336a85)",
        backgroundSize: "400% 400%",
        animation: "gradient-border-shift 8s ease infinite",
      }}
    >
      <div className="rounded-[22px] bg-tinta-800/95 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
