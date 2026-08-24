import { Moon, Sun } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <Moon className="dark:hidden" />
      <Sun className="hidden dark:block" />
    </button>
  );
}
