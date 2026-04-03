import type { FC, ReactElement } from "react";

import styles from "./Skills.module.css";

const skills = [
  {
    header: "Languages",
    tech: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    header: "Technologies",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "REST APIs", "SQL", "NoSQL", "AWS S3"],
  },
  {
    header: "Libraries",
    tech: ["React.js", "PixiJS", "Redux", "Node.js", "Jest"],
  },
  {
    header: "Tools",
    tech: ["Git", "GitLab", "Webpack", "Babel", "Figma", "Storybook", "Postman", "MongoDB"],
  },
  {
    header: "DevOps",
    tech: ["GitLab CI/CD", "Agile/Scrum", "Jira", "Confluence"],
  },
  {
    header: "AI Tools",
    tech: ["Cursor", "Copilot", "Amazon Q"],
  },
];

export const Skills: FC = (): ReactElement => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.skills__title}>Skills</h2>
      <div className={styles.skills__container}>
        {skills.map((skill, index) => (
          <article key={index} className={styles.skills__article}>
            <p className={styles.skills__articleTitle}>{skill.header}</p>
            <ul className={styles.skills__articleList}>
              {skill.tech.map((e, index) => (
                <li key={index} className={styles.skills__articleItem}>
                  {e}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
