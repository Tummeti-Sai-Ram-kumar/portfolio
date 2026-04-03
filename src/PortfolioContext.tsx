import type { FC, ReactElement } from "react"
import { useState, createContext, useContext, useMemo } from "react";

import { ThemeMode } from "./components/types";

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

export const PortfolioContextProvider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [theme, setTheme] = useState(ThemeMode.LIGHT);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
    
  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}