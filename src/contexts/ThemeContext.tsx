import React, { useState } from "react";
import Context, { ThemeState } from "../store";
import useToggleState from "../hooks/useToggleState";

export declare interface ThemeContextProps {
  children: React.ReactNode;
}

interface ThemeContextState extends ThemeState {
  toggleTheme: boolean | (() => void);
}

export function ThemeProvider({ children }: ThemeContextProps) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  const valueObj: ThemeContextState = {
    isDarkMode,
    toggleTheme,
  };

  return <Context.Provider value={valueObj}>{children}</Context.Provider>;
}
