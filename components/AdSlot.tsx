"use client";

import { useEffect } from "react";

type AdSlotProps = {
  slot?: string;
  variant?: "banner" | "square" | "sidebar";
  className?: string;
};

const SIZE_MAP: Record<string, string> = {
  banner: "min-h-24 md:min-h-28",
  square: "min-h-64",
  sidebar: "min-h-96",
};

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export default function AdSlot({ slot, variant = "banner", className = "" }: AdSlotProps) {
  useEffect(() => {
    if (!ADSENSE_CLIENT) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // ad blocker ya script load nahi hui, ignore
    }
  }, []);

  if (ADSENSE_CLIENT && slot) {
    return (
      <div className={`w-full ${SIZE_MAP[variant]} ${className}`}>
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // AdSense set nahi hai to ek clean placeholder dikhayenge taaki layout na bigde.
  return (
    <div
      className={`w-full ${SIZE_MAP[variant]} flex items-center justify-center rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/60 text-sm font-medium text-blue-300 transition-opacity animate-fade-in ${className}`}
    >
      Advertisement Space
    </div>
  );
}
