import { useRef, useState, useCallback } from "react";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
}

export function useMouseTilt(maxRotation: number = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setTilt({
        rotateX: -y * maxRotation * 2,
        rotateY: x * maxRotation * 2,
        glareX: (x + 0.5) * 100,
        glareY: (y + 0.5) * 100,
      });
    },
    [maxRotation]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  }, []);

  return {
    ref,
    tilt,
    isHovering,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
