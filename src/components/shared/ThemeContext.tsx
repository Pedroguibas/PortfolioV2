import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type ThemeType = "dark" | "light";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  toggleTheme: () => void;
};

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeContextProps) {
  const cookieTheme = Cookies.get("theme") as ThemeType;
  const [theme, setTheme] = useState<ThemeType>(
    cookieTheme ? cookieTheme : "dark"
  );

  useEffect(() => {
    const root: HTMLElement = document.querySelector("#root")!;
    if (theme == "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (Cookies.get("acceptedCookies") == "accepted")
      Cookies.set("theme", newTheme, { expires: 30 });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctxt = useContext(ThemeContext);
  if (!ctxt) throw new Error("useTheme must be called inside ThemeProvider.");
  return ctxt;
}
