import type { FC, ReactElement } from "react";

// import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { MileStones } from "./components/MileStones";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

export const App: FC = (): ReactElement => {
  return (
    <>
      {/* <Header /> */}
      <Introduction />
      <Journey />
      <Skills />
      <Projects />
      <MileStones />
      <Contact />
    </>
  );
};
