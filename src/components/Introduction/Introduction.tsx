import type { FC, ReactElement } from "react";

import profile from "../../assets/profile.jpeg";

import styles from "./Introduction.module.css";
export const Introduction: FC = (): ReactElement => {
  return (
    <section className={styles.introduction}>
      <img src={profile} className={styles.introduction__image} alt="profile" />
      <div className={styles.introduction__content}>
        <p>I'm Tummeti Sai Ram Kumar</p>
        <p>I'm a Software Development Engineer</p>
        <p className={styles.introduction__article}>
          With over 2.5 years of experience building scalable and high-performance applications. I enjoy solving real-time problems and
          turning complex ideas into seamless, user-friendly experiences. My developer journey began during my undergraduate days, where I
          actively contributed to developer communities and built practical solutions. These early experiences laid the foundation for my
          growth into developing production-grade systems and handling real-world challenges. Over time, I’ve developed a strong focus on
          writing clean, maintainable code, improving performance, and building systems that scale efficiently. I’m driven by curiosity and
          a constant desire to learn, explore, and push my limits while creating meaningful and impactful solutions.
        </p>
        <span>Strive To Be The Best</span> <span>Infinity is my Limit</span>
      </div>
    </section>
  );
};
