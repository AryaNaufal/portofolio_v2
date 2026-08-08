"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode; initialDarkMode?: boolean }> = ({
  children,
  initialDarkMode = false,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(initialDarkMode);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    let isDark = false;

    if (savedTheme) {
      isDark = savedTheme === "dark";
    } else {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(event.matches);
        document.documentElement.classList.toggle("dark", event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleSetDarkMode = useCallback((value: boolean) => {
    setDarkMode(value);
    localStorage.setItem("theme", value ? "dark" : "light");
    document.cookie = `theme=${value ? "dark" : "light"}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.classList.toggle("dark", value);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode: handleSetDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      darkMode: false,
      setDarkMode: () => {},
    };
  }
  return context;
};

