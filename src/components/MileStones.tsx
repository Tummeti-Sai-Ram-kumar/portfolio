import type { FC, ReactElement } from "react";

import { MileStone } from "./MileStone";

import styles from "./MileStones.module.css";

const mileStones = [
  {
    header: "Organizations",
    list: ["Amazon Alexa Developer Community", "Google Developer Student Club"],
  },
  {
    header: "Achievements",
    list: ["Great India Alexa Hackathon - You’ve Got Skills Winner", "Indian Space Research Organisation Space Week - Finalist"],
  },
  {
    header: "Languages",
    list: ["English", "Hindi", "Telugu"],
  },
  {
    header: "Intrests",
    list: ["Mathematics", "Sustainable Development"],
  },
];

export const MileStones: FC = (): ReactElement => {
  return (
    <section className={styles.mileStones}>
      <h2 className={styles.mileStones__title}>More About Me</h2>
      <section className={styles.mileStones__container}>
        {mileStones.map(({ header, list }) => (
          <MileStone header={header} list={list} />
        ))}
      </section>
    </section>
  );
};
