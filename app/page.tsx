"use client";

// Helpers
import { useTheme } from "next-themes";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ThemeToggleButton from "@/components/theme-toggle-button";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex h-screen flex-col items-center justify-center">
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Deep Dive Tech</CardTitle>
            <CardDescription>
              Navigating the Depths of Cutting-Edge Innovation
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
