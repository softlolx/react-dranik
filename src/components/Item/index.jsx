import { useState } from "react";
import styles from "./Item.module.scss";

export function Item({ imgUrl, name, price, types, sizes, category, rating }) {
  const [addCount, setAddCount] = useState(0);
  const [selectedType, setSelectedType] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const itemTypes = ["диетические", "со\u00A0сметаной"];

  function handleAddButtonCLick() {
    setAddCount((prev) => prev + 1);
  }

  function handleTypeClick(evt) {
    setSelectedType(evt.target.id);
  }
  function handleSizeClick(evt) {
    setSelectedSize(evt.target.id);
  }

  return (
    <div className={styles.item}>
      <img src={imgUrl} alt="#" className={styles.item__image} />
      <h3 className={styles.item__name}>{name}</h3>
      <div className={styles.item__configContainer}>
        <div className={styles.item__specificButtons}>
          {types.map((item, index) => {
            return (
              <button
                key={index}
                id={item}
                className={`${styles.item__specificButton} ${
                  selectedType == item ? styles.item__specificButton_active : ""
                }`}
                onClick={handleTypeClick}
              >
                {itemTypes[item]}
              </button>
            );
          })}
        </div>
        <div className={styles.item__sizes}>
          {sizes.map((item, index) => {
            return (
              <button
                key={index}
                id={item}
                className={`${styles.item__sizeButton} ${
                  selectedSize == item ? styles.item__sizeButton_active : ""
                }`}
                onClick={handleSizeClick}
              >
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
