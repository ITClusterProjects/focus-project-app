"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BounceLoader } from "react-spinners";
import { COLORS } from "@/styles/colors";

export default function LoaderOverlay() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100); 
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

return (
     <div style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: COLORS.lighterBg,
      zIndex: 9999
    }}>
    <BounceLoader
      color={COLORS.accent}
      size={85}
      aria-label="Loading Spinner"
      data-testid="loader"
    /></div>
  );
}
