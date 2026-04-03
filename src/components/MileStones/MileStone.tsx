import type { FC, ReactElement } from "react";
import { useState, useCallback } from "react";

import styles from "./MileStones.module.css";

interface MileStoneProps {
  header: string;
  list: string[];
}

export const MileStone: FC<MileStoneProps> = ({ header, list }): ReactElement => {
  const [reveal, setReveal] = useState(false);

  const handleReveal = useCallback(() => {
    setReveal(!reveal);
  }, [reveal]);

  return (
    <article className={`${styles.mileStones__article} ${reveal ? styles.mileStones__article_reveal : ""}`}>
      <p className={styles.mileStones__articleTitle} onClick={handleReveal}>
        {header}
      </p>
      <ul className={styles.mileStones__articleList}>
        {list.map((value, index) => (
          <li key={index} className={styles.mileStones__articleItem}>{value}</li>
        ))}
      </ul>
    </article>
  );
};
