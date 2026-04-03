import type { FC, ReactElement } from "react";

import { Introduction } from "./components/Introduction";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { MileStones } from "./components/MileStones";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Theme } from "./components/Theme";

import { PortfolioContextProvider } from "./components/PortfolioContext";

export const App: FC = (): ReactElement => {

  return (
    <PortfolioContextProvider>
      <>
        <Introduction />
        <Journey />
        <Skills />
        <Projects />
        <MileStones />
        <Contact />
        <Theme />
      </>
    </PortfolioContextProvider>
  );
};
