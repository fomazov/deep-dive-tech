import type { Metadata } from "next";

// Fonts
import { Inter as FontSans } from "next/font/google";

// Components
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Styles
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen justify-between flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
