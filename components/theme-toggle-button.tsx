// Icons
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

// Components
import { Button } from "@/components/ui/button";

//Types
type ThemeToggleButtonProps = {
  theme: string | undefined; // Add | undefined here
  toggleTheme: () => void;
};

export default function ThemeToggleButton({
  theme,
  toggleTheme,
}: Readonly<ThemeToggleButtonProps>) {
  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
