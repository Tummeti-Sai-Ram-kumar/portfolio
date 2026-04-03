import type { FC, ReactElement } from "react";
import { useLayoutEffect } from "react";

import { usePortfolioContext } from '../../PortfolioContext';

import { ThemeLight } from "./ThemeLight";
import { ThemeDark } from "./ThemeDark";
import { ThemeMode } from "../../types";

import styles from "./Theme.module.css";

export const Theme: FC = (): ReactElement => {
  const { theme, setTheme } = usePortfolioContext();

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    return () => document.documentElement.removeAttribute('data-theme');
  }, [theme]);

  return (
    <div className={styles.theme} onClick={() => setTheme(theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT)}>
      <div className={styles.theme__icon}>
        {theme === ThemeMode.LIGHT ? <ThemeDark /> : <ThemeLight />}
      </div>
    </div>
  )
}