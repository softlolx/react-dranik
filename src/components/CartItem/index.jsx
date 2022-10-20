import styles from './CartItem.module.scss';

export function CartItem({ id, title, price, imgUrl, type, size, count }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <img src={imgUrl} alt="#" className={styles.product__image} />
        <div className={styles.product__descriptionContainer}>
          <p className={styles.product__name}>{title}</p>
          <span className={styles.product__specs}>
            {size}, {type}
          </span>
        </div>
      </div>
      <div className={styles.cartItem__qtyContainer}>
        <button className={styles.cartItem__removeQtyButton}></button>
        <span className={styles.cartItem__qty}>{count}</span>
        <button className={styles.cartItem__addQtyButton}></button>
      </div>
      <span className={styles.cartItem__sum}>{price}</span>
      <button className={styles.cartItem__removeButton}></button>
    </div>
  );
}
