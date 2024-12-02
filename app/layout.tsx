import type { Metadata, Viewport } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({ subsets: ["latin"] });

// viewport: "width=device-width, initial-scale=1.0",
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  title: "VishWorks - Expert Software Solutions",
  description:
    "VishWorks offers tailored software development services for web, mobile, Windows, and more. Get in touch for expert solutions!",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "Windows applications",
    "custom software",
    "VishWorks",
    "android",
    "ios",
  ],
  authors: [{ name: "VishWorks", url: "https://www.vishworks.com" }],
  openGraph: {
    title: "VishWorks - Expert Software Solutions",
    description:
      "Offering software development for web, mobile, and Windows. Tailored solutions for your business.",
    url: "https://www.vishworks.com",
    siteName: "VishWorks",
    images: [
      {
        url: "https://www.vishworks.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VishWorks - Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VishWorks - Expert Software Solutions",
    description:
      "Tailored software solutions for web, mobile, and more. Reach out for expert services!",
    images: ["https://www.vishworks.com/og-image.png"],
  },

  alternates: {
    canonical: "https://www.vishworks.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-x-clip max-w-[100vw]">
      <body className={`${hostGrotesk.className} antialiased overflow-x-clip `}>
        {children}
      </body>
    </html>
  );
}
