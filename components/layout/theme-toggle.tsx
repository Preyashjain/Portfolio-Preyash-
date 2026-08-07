"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

/**
 * True once the client has hydrated, false during SSR and the initial
 * hydration pass. Using useSyncExternalStore (rather than an effect that
 * calls setState) is the pattern React's own docs recommend for this
 * exact "has hydration finished" signal — it resolves in React's render
 * phase instead of triggering a post-commit cascading re-render.
 */
function useHasMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      className="h-9 w-9 p-0"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {hasMounted && resolvedTheme === "dark" ? (
        <Sun className="h-[17px] w-[17px]" />
      ) : (
        <Moon className="h-[17px] w-[17px]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export { ThemeToggle };
