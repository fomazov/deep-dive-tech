"use client";

// Components
import ThemeToggleButton from "@/components/theme-toggle-button";

// Helpers
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="top-0 z-50 w-full py-12 mb-16 border-b bg-primary-foreground">
      <div className="container px-0 max-w-2xl flex h-14 items-center">
        <span className="font-medium sm:inline-block">
          Select a data set to make a request
        </span>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          </nav>
        </div>
      </div>
    </header>
  );
}
