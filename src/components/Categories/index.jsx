import styles from "./Categories.module.scss";

export function Categories() {
  return (
    <section className={styles.cat}>
      <ul className={styles.cat__list}>
        <li className={styles.cat__item}>Все</li>
        <li className={styles.cat__item}>Мясные</li>
        <li className={styles.cat__item}>Веганские</li>
        <li className={styles.cat__item}>Грилль</li>
        <li className={styles.cat__item}>Острые</li>
        <li className={styles.cat__item}>Закрытые</li>
      </ul>
      <div className={styles.sort}>
        <button className={styles.sort__directionButton}></button>
        <span className={styles.sort__text}>Сортировка по:</span>
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
