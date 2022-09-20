import styles from "./SortPopup.module.scss";

export function SortPopup() {
  return (
    <div className={styles.sort__optionContainer}>
      <ul className={styles.sort__optionList}>
        <li className={styles.sort__optionItem}>популярности</li>
        <li className={styles.sort__optionItem}>цене</li>
        <li className={styles.sort__optionItem}>алфавиту</li>
      </ul>
    </div>
  );
}
