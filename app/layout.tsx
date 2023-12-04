import type { Metadata } from "next";

// Fonts
import { Inter as FontSans } from "next/font/google";

// Styles
import "@/styles/globals.css";

// Helpers
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Deep Dive Tech",
  description: "Navigating the Depths of Cutting-Edge Innovation",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
