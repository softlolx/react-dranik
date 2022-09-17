import { useState } from "react";
import styles from "./Categories.module.scss";

export function Categories() {
  const [active, setActive] = useState(0);

  const categories = ["Все", "Мясные", "Веганские", "Грибные", "Рыбные", "Острые"];

  function handleCategoryClick(evt) {
    setActive(evt.target.id);
  }

  return (
    <section className={styles.cat}>
      <ul className={styles.cat__list}>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              id={index}
              className={`${styles.cat__item} ${active == index ? styles.cat__item_active : ""}`}
              onClick={handleCategoryClick}
            >
              {item}
            </li>
          );
        })}
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
