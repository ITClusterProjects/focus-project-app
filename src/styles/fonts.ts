import localFont from "next/font/local";

export const ManropeFont = localFont({
  src: [
    {
      path: "../assets/fonts/Manrope-VariableFont_wght.ttf",
      weight: "400 900",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

