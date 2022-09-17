import { useState } from "react";
import styles from "./Item.module.scss";

export function Item({ imgUrl, name, price, types, sizes, category, rating }) {
  const [addCount, setAddCount] = useState(0);

  const specs = ["диетические", "со\u00A0сметаной"];

  function handleAddButtonCLick() {
    setAddCount((prev) => prev + 1);
  }

  return (
    <div className={styles.item}>
      <img src={imgUrl} alt="#" className={styles.item__image} />
      <h3 className={styles.item__name}>{name}</h3>
      <div className={styles.item__configContainer}>
        <div className={styles.item__specificButtons}>
          {types.map((item) => {
            return <button className={styles.item__specificButton}>{specs[item]}</button>;
          })}
        </div>
        <div className={styles.item__sizes}>
          {sizes.map((item, index) => {
            return (
              <button className={styles.item__sizeButton} key={index}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.item__bottomContainer}>
        <span className={styles.item__price}>от&#160;{price}&#8381;</span>
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
