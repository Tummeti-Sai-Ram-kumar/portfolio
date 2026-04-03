import type { FC, ReactElement } from "react"

import styles from "./Projects.module.css"

const projects = [
  {
    name: 'Housie Game',
    description: 'An engaging bingo-style game designed for any number of players. Each participant receives a unique ticket featuring numbers ranging from 1 to 100. As Alexa announces the numbers, players mark them off on their tickets.',
    code: 'https://github.com/Tummeti-Sai-Ram-kumar/Housie-Game',
    demo: 'https://www.amazon.in/Tummeti-Sai-Ram-Kumar-skill/dp/B084FHFGM5'
  },
  {
    name: 'Treasure Hunt',
    description: 'A fast-paced game where you have 15 seconds to pick 5 unique numbers from 1 to 48. Five random treasures are hidden in this range. Begin with a 1000 balance, place your bet, and if your numbers match the treasures and win',
    code: 'https://github.com/Tummeti-Sai-Ram-kumar/treasure-hunt',
    demo: 'https://tummeti-sai-ram-kumar.github.io/treasure-hunt/'
  }
];

export const Projects: FC = (): ReactElement => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projects__title}>Projects</h2>
      <section className={styles.projects__list}>
        {projects.map((project, index) => (<article key={index} className={styles.project}>
          <p className={styles.project__name}>{project.name}</p>
          <p className={styles.project__description}>{project.description}</p>
          <div className={styles.project__links}>
            <a href={project.demo} className={styles.project__demo}>{'Demo >>>'}</a>
            <a href={project.code} className={styles.project__code}>{'Code >>>'}</a>
          </div>
          </article>)
        )}
      </section>
    </section>
  )
}