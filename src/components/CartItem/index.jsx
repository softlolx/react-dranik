import styles from "./CartItem.module.scss";

export function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <img
          src="https://cdn.vkuso.ru/uploads/draniki-s-syrom-vetchinoj-i-ukropom-820.jpg"
          alt="#"
          className={styles.product__image}
        />
        <div className={styles.product__descriptionContainer}>
          <p className={styles.product__name}>Классика</p>
          <span className={styles.product__specs}>XL, со сметаной</span>
        </div>
      </div>
      <div className={styles.cartItem__qtyContainer}>
        <button className={styles.cartItem__removeQtyButton}></button>
        <span className={styles.cartItem__qty}>2</span>
        <button className={styles.cartItem__addQtyButton}></button>
      </div>
      <span className={styles.cartItem__sum}>550</span>
      <button className={styles.cartItem__removeButton}></button>
    </div>
  );
}
