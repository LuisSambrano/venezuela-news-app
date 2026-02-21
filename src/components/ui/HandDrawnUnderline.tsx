"use client";

/**
 * HandDrawnUnderline — SVG path underline that animates when scrolled into view.
 * Creates a hand-drawn, organic feel beneath a keyword.
 */

import { useRef } from "react";
import { m as motion, useInView } from "framer-motion";

interface HandDrawnUnderlineProps {
  children: React.ReactNode;
  color?: string;
  strokeWidth?: number;
  className?: string;
  delay?: number;
}

export function HandDrawnUnderline({
  children,
  color = "#3b82f6",
  strokeWidth = 8,
  className = "",
  delay = 0,
}: HandDrawnUnderlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        style={{ height: strokeWidth + 4 }}
      >
        <motion.path
          d="M2 8 C 30 2, 50 10, 80 6 S 130 2, 160 7 S 190 4, 198 6"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            pathLength: { duration: 0.8, ease: "easeOut", delay: delay + 0.3 },
            opacity: { duration: 0.2, delay },
          }}
        />
      </svg>
    </span>
  );
}

export default HandDrawnUnderline;
