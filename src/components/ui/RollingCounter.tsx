"use client";

/**
 * RollingCounter — Premium mechanical-style rolling counter.
 * Adapted from external spec for LibertadVNZL launch countdown.
 */

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

type PlaceValue = number | ".";

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function NumberCell({ mv, number, height }: NumberProps) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        y,
      }}
    >
      {number}
    </motion.span>
  );
}

interface DigitProps {
  place: PlaceValue;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  const isDot = place === ".";
  const numPlace = isDot ? 1 : (place as number);
  const valueRoundedToPlace = Math.floor(value / numPlace);

  const animatedValue = useSpring(valueRoundedToPlace, {
    damping: 20,
    stiffness: 100,
    mass: 1,
  });

  useEffect(() => {
    if (!isDot) {
      animatedValue.set(valueRoundedToPlace);
    }
  }, [animatedValue, valueRoundedToPlace, isDot]);

  if (isDot) {
    return (
      <span
        className="relative inline-flex items-center justify-center"
        style={{ height, width: "fit-content", ...digitStyle }}
      >
        .
      </span>
    );
  }

  return (
    <span
      className="relative inline-flex overflow-hidden"
      style={{
        height,
        position: "relative",
        width: "1ch",
        fontVariantNumeric: "tabular-nums",
        ...digitStyle,
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <NumberCell key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

export interface RollingCounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: PlaceValue[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function RollingCounter({
  value,
  fontSize = 100,
  padding = 0,
  places,
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "inherit",
  fontWeight = "inherit",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "hsl(var(--background))",
  gradientTo = "transparent",
}: RollingCounterProps) {
  const height = fontSize + padding;

  const derivedPlaces =
    places ||
    [...value.toString()].map((ch, i, a) => {
      if (ch === ".") return "." as const;
      const dotIndex = a.indexOf(".");
      const isInteger = dotIndex === -1;
      const exponent = isInteger
        ? a.length - i - 1
        : i < dotIndex
          ? dotIndex - i - 1
          : -(i - dotIndex);
      return 10 ** exponent;
    });

  return (
    <span style={{ position: "relative", display: "inline-block", ...containerStyle }}>
      <span
        style={{
          fontSize,
          display: "flex",
          gap,
          overflow: "hidden",
          borderRadius,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          lineHeight: 1,
          color: textColor,
          fontWeight,
          ...counterStyle,
        }}
      >
        {derivedPlaces.map((place, idx) => (
          <Digit key={`${place}-${idx}`} place={place} value={value} height={height} digitStyle={digitStyle} />
        ))}
      </span>
      <span
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <span style={{ height: gradientHeight, background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`, zIndex: 10 }} />
        <span style={{ height: gradientHeight, background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`, zIndex: 10 }} />
      </span>
    </span>
  );
}

export default RollingCounter;
