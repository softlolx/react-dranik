import { useState } from "react";
import styles from "./Item.module.scss";

export function Item({ imgUrl, name }) {
  const [addCount, setAddCount] = useState(0);

  function handleAddButtonCLick() {
    setAddCount((prev) => prev + 1);
  }

  return (
    <div className={styles.item}>
      <img src={imgUrl} alt="#" className={styles.item__image} />
      <h3 className={styles.item__name}>{name}</h3>
      <div className={styles.item__configContainer}>
        <button
          className={`${styles.item__configButton} ${styles.item__configButton_wide} ${styles.item__configButton_active}`}
        >
          диетические
        </button>
        <button className={`${styles.item__configButton} ${styles.item__configButton_wide} `}>
          со сметаной
        </button>
        <button
          className={`${styles.item__configButton} ${styles.item__configButton_short} ${styles.item__configButton_active}`}
        >
          M
        </button>
        <button className={`${styles.item__configButton} ${styles.item__configButton_short}`}>
          L
        </button>
        <button className={`${styles.item__configButton} ${styles.item__configButton_short}`}>
          XL
        </button>
      </div>
      <div className={styles.item__bottomContainer}>
        <span className={styles.item__price}>от 395 &#8381;</span>
        <button
          className={`${styles.item__addButton} ${addCount > 0 && styles.item__addButton_active}`}
          onClick={handleAddButtonCLick}
        >
          <div className={styles.item__addButtonIcon}></div>
          <span
            className={`${styles.item__addButtonText} ${
              addCount > 0 && styles.item__addButtonText_active
            }`}
          >
            Добавить
          </span>
          {addCount > 0 && <span className={styles.item__addButtonQty}>{addCount}</span>}
        </button>
      </div>
    </div>
  );
}
