"use client";

/**
 * CountUp — Animated number counter that triggers on scroll into view.
 * Uses Framer Motion spring for smooth, premium feel.
 */

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring, useTransform, m as motion } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({ target, suffix = "", prefix = "", className = "", duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100 / duration,
    mass: 1,
  });

  const rounded = useTransform(springValue, (latest) => {
    if (target >= 100) return Math.round(latest).toLocaleString();
    if (target >= 1) return Math.round(latest).toString();
    return latest.toFixed(1);
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(target);
    }
  }, [isInView, springValue, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
}

export default CountUp;
