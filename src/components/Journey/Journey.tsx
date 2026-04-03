import type { FC, ReactElement } from "react";
import { useState } from "react";

import { JourneySection } from "../../types";

import styles from "./Journey.module.css";

export const Journey: FC = (): ReactElement => {
  const [journey, setJourney] = useState(JourneySection.EXPERIENCE);

  return (
    <section className={styles.journey}>
      <h2 className={styles.journey__title}>Timeline</h2>
      <div className={styles.journey__subTitleContainer}>
        <p className={`${styles.journey__subTitle} ${journey === JourneySection.EXPERIENCE ? styles['journey__subTitle--active'] : ''}`} onClick={() => setJourney(JourneySection.EXPERIENCE)}>
          Experience
        </p>
        <p className={`${styles.journey__subTitle} ${journey === JourneySection.EDUCATION ? styles['journey__subTitle--active'] : ''}`} onClick={() => setJourney(JourneySection.EDUCATION)}>
          Education
        </p>
      </div>
      {journey === JourneySection.EDUCATION ? (
        <section className={styles.journey__subsection}>
          <article className={styles.journey__article}>
            <p>B.Tech in CSE</p>
            <p>July 2019 - June 2023</p>
            <p>Lovely Professional University</p>
            <p>Phagwara, Punjab</p>
          </article>
          <article className={styles.journey__article}>
            <p>Intermediate in MPC</p>
            <p>July 2017 - June 2019</p>
            <p>Srujana Junior College</p>
            <p>Kurnool, Andhra Pradesh</p>
          </article>
          <article className={styles.journey__article}>
            <p>Class X in CBSE</p>
            <p>July 2016 - June 2017</p>
            <p>St.Joseph's High School</p>
            <p>Kurnool, Andhra Pradesh</p>
          </article>
        </section>
      ) : (
        <section className={styles.journey__subsection}>
          <article className={styles.journey__article}>
            <p>Software Development Engineer - I</p>
            <p>July 2024 - Present</p>
            <p>Arrise Solutions India Pvt.Ltd.</p>
            <p>Hyderabad, Telangana</p>
          </article>
          <article className={styles.journey__article}>
            <p>Associate Software Engineer</p>
            <p>July 2023 - June 2024</p>
            <p>Arrise Solutions India Pvt.Ltd.</p>
            <p>Hyderabad, Telangana</p>
          </article>
          <article className={styles.journey__article}>
            <p>Software Development Intern</p>
            <p>January 2023 - June 2023</p>
            <p>Arrise Solutions India Pvt.Ltd.</p>
            <p>Hyderabad, Telangana</p>
          </article>
          <article className={styles.journey__article}>
            <p>IT Intern</p>
            <p>January 2022 - June 2022</p>
            <p>Trident Group</p>
            <p>Ludhiana, Punjab</p>
          </article>
        </section>
      )}
    </section>
  );
};
