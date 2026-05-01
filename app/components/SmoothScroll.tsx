"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

// Changing ReactNode to any stops the "bigint" type error on Vercel
export default function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}