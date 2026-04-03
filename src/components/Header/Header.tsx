import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__title}>Tummeti Sai Ram Kumar</p>

      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a className={styles.header__link}>Home</a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link}>Skills</a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link}>Projects</a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
