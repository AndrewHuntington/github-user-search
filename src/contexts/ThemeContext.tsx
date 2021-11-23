import React, { createContext, useState } from "react";

export declare interface ThemeContextProps {
  children: React.ReactNode;
}

// ! Is there a better way to type this than using "any"?
export const ThemeContext = createContext<any>(false);

export function ThemeProvider({ children }: ThemeContextProps) {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
