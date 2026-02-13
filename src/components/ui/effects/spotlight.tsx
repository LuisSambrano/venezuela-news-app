"use client";

import React, { useRef, useEffect } from "react";
import { useMotionTemplate, useMotionValue, m as motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { currentTarget, clientX, clientY } = event;
      if (!(currentTarget instanceof HTMLElement)) return;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    const parent = divRef.current?.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      return () => {
        parent.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [divRef, mouseX, mouseY]);

  return (
    <motion.div
      ref={divRef}
      className={cn(
        "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100",
        className
      )}
      style={{
        background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${fill} 0%,
              transparent 80%
            )
          `,
      }}
    />
  );
};
