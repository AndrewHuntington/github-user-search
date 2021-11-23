import { createContext } from "react";

const initialState: ThemeState = {
  isDarkMode: false,
};

export type ThemeState = {
  isDarkMode: boolean | (() => void);
};

const context = createContext<ThemeState>(initialState);

export default context;
