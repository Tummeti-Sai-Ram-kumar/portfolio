import type { FC, ReactElement } from "react";

import { Introduction } from "./components/Introduction/Introduction";
import { Journey } from "./components/Journey/Journey";
import { Skills } from "./components/Skills/Skills";
import { MileStones } from "./components/MileStones/MileStones";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Theme } from "./components/Theme/Theme";

import { PortfolioContextProvider } from "./PortfolioContext";

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
