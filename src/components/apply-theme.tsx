"use client";

import { useAppKitTheme } from "@reown/appkit/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

function ApplyTheme() {
  const { setThemeMode } = useAppKitTheme();
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const effectiveTheme = theme === "system" ? resolvedTheme : theme;

    if (effectiveTheme === "dark") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }, [theme, resolvedTheme, setThemeMode]);

  return null;
}

export default ApplyTheme;