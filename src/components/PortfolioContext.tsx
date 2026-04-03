import type { FC, ReactElement } from "react"
import { useState, createContext, useContext, useMemo, useEffect, useCallback } from "react";

import { ThemeMode } from "./types";

interface PortfolioContextType {
  theme: ThemeMode,
  setTheme: (theme: ThemeMode) => void;
}

export const PortfolioContext = createContext<PortfolioContextType>({
  theme: ThemeMode.LIGHT,
  setTheme: () => {}
});

export const usePortfolioContext = (): PortfolioContextType => {
  return useContext(PortfolioContext)
}

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const PortfolioContextProvider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [theme, setTheme] = useState(isDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT);

  const toggleTheme = useCallback((e: MediaQueryListEvent) => {
      setTheme(e.matches ? ThemeMode.DARK : ThemeMode.LIGHT);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', toggleTheme);

    return () => mediaQuery.removeEventListener('change', toggleTheme);

  },[toggleTheme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
    
  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}