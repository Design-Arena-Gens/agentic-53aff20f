import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-hubot-sans",
  display: "swap",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VoltSense | Smart Home Energy Monitor",
    template: "%s | VoltSense",
  },
  description:
    "VoltSense keeps your smart home efficient with adaptive energy monitoring, predictive automation, and effortless insights.",
  metadataBase: new URL("https://agentic-53aff20f.vercel.app"),
  openGraph: {
    title: "VoltSense — Smart Home Energy Monitor",
    description:
      "Monitor inverter, grid, and storage in real time. VoltSense optimizes every watt for comfort and savings.",
    url: "https://agentic-53aff20f.vercel.app",
    siteName: "VoltSense",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltSense — Smart Home Energy Monitor",
    description:
      "Learn how VoltSense helps you control your home's energy profile and save every month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <div className="mx-auto flex min-h-screen max-w-[1180px] flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-10 lg:pb-16 lg:pt-10">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
