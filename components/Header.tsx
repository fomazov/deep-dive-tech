"use client";

// Core
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import ThemeToggleButton from "@/components/ThemeToggleButton";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";

// Helpers
import { useTheme } from "next-themes";
import { cn } from "@/lib/helpers";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navigation = [
    {
      name: "Index Page",
      href: "/",
    },
    {
      name: "Marine Creatures",
      href: "/creatures",
    },
    {
      name: "Oceanic Plants",
      href: "/plants",
    },
  ];
  return (
    <header className="top-0 z-50 w-full py-8 mb-12 border-b bg-primary-foreground">
      <div className="container px-0 max-w-2xl flex h-14 justify-center items-center">
        <nav className="font-medium sm:inline-block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map(item => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), {
                        "bg-muted": pathname === item.href,
                      })}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex ml-8 items-center justify-end">
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
