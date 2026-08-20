"use client";

import { useEffect, useState } from "react";

/**
 * Tailwind's default breakpoints (https://tailwindcss.com/docs/responsive-design).
 * mobile  = below `sm`
 * tablet  = `sm` up to (not including) `lg`
 * desktop = `lg` and up
 */
export const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface DeviceTypeResult {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function getDeviceType(width: number): DeviceType {
  if (width < TAILWIND_BREAKPOINTS.sm) return "mobile";
  if (width < TAILWIND_BREAKPOINTS.lg) return "tablet";
  return "desktop";
}

/**
 * Tracks the current device tier by viewport width.
 * Returns `null` until mounted (avoids SSR/hydration mismatch) —
 * callers should treat `null` as "not yet known" and render
 * nothing (or a neutral placeholder) for that one frame.
 */
export function useDeviceType(): DeviceTypeResult | null {
  const [result, setResult] = useState<DeviceTypeResult | null>(null);

  useEffect(() => {
    const tabletMql = window.matchMedia(`(min-width: ${TAILWIND_BREAKPOINTS.sm}px)`);
    const desktopMql = window.matchMedia(`(min-width: ${TAILWIND_BREAKPOINTS.lg}px)`);

    const update = () => {
      const deviceType = getDeviceType(window.innerWidth);
      setResult({
        deviceType,
        isMobile: deviceType === "mobile",
        isTablet: deviceType === "tablet",
        isDesktop: deviceType === "desktop",
      });
    };

    update();
    tabletMql.addEventListener("change", update);
    desktopMql.addEventListener("change", update);
    return () => {
      tabletMql.removeEventListener("change", update);
      desktopMql.removeEventListener("change", update);
    };
  }, []);

  return result;
}
