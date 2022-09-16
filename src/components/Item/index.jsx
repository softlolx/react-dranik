import styles from "./Item.module.scss";

export function Item() {
  return (
    <div className={styles.item}>
      <img
        src="https://cdn.vkuso.ru/uploads/draniki-s-syrom-vetchinoj-i-ukropom-820.jpg"
        alt="#"
        className={styles.item__image}
      />
      <h3 className={styles.item__name}>Классические</h3>
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
        <button className={styles.item__addButton}>
          <div className={styles.item__addButtonIcon}></div>
          <span className={styles.item__addButtonText}>Добавить</span>
          <span className={styles.item__addButtonQty}>2</span>
        </button>
      </div>
    </div>
  );
}
