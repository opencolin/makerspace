import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

function resolveMetadataBase(): URL {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "http://localhost:3000";

  try {
    return new URL(rawUrl);
  } catch {
    return new URL("http://localhost:3000");
  }
}

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: "500",
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: "Makerspace — shop · lab · desk",
  description:
    "Every tool you wanted in a garage and couldn't justify, in one shared building. Wood, metal, 3D printers, lasers, an electronics bench, and people who already know how. One membership. 24/7 for the keyed-in.",
  openGraph: {
    title: "Makerspace — shop · lab · desk",
    description:
      "Wood + metal shop, 3D printers, lasers, electronics bench, sewing room. One membership. 24/7 access for members.",
    images: ["/photo-hero.jpg"],
    type: "website",
    siteName: "Makerspace",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
