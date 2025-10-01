import { createContext, useContext, useState } from "react";
import React from "react";

type ThemeType = "dark" | "light";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctxt = useContext(ThemeContext);
  if (!ctxt) throw new Error("useTheme must be called inside ThemeProvider.");
  return ctxt;
}
