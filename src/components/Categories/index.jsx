import { useState } from "react";
import styles from "./Categories.module.scss";

export function Categories() {
  const [active, setActive] = useState(0);

  function handleCategoryClick(evt) {
    setActive(evt.target.id);
  }

  return (
    <section className={styles.cat}>
      <ul className={styles.cat__list}>
        <li
          id="0"
          className={`${styles.cat__item} ${active == 0 && styles.cat__item_active}`}
          onClick={handleCategoryClick}
        >
          Все
        </li>
        <li
          id="1"
          className={`${styles.cat__item} ${active == 1 && styles.cat__item_active}`}
          onClick={handleCategoryClick}
        >
          Мясные
        </li>
        <li
          id="2"
          className={`${styles.cat__item} ${active == 2 && styles.cat__item_active}`}
          onClick={handleCategoryClick}
        >
          Веганские
        </li>
        <li
          id="3"
          className={`${styles.cat__item} ${active == 3 && styles.cat__item_active}`}
          onClick={handleCategoryClick}
        >
          Грилль
        </li>
        <li
          id="4"
          className={`${styles.cat__item} ${active == 4 && styles.cat__item_active}`}
          onClick={handleCategoryClick}
        >
          Острые
        </li>
        <li
          id="5"
          className={`${styles.cat__item} ${active == 5 && styles.cat__item_active}`}
          onClick={handleCategoryClick}
        >
          Закрытые
        </li>
      </ul>
      <div className={styles.sort}>
        <button className={styles.sort__directionButton}></button>
        <span className={styles.sort__text}>Сортировка&nbsp;по:</span>
        <button className={styles.sort__optionButton}> популярности</button>
        <div className={styles.sort__optionContainer}>
          <ul className={styles.sort__optionList}>
            <li className={styles.sort__optionItem}>популярности</li>
            <li className={styles.sort__optionItem}>цене</li>
            <li className={styles.sort__optionItem}>алфавиту</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
