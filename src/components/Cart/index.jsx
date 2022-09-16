import styles from "./Cart.module.scss";

export function Cart({ children }) {
  return (
    <section className={styles.cart}>
      <div className={styles.cart__header}>
        <div className={styles.cart__headerlogoContainer}>
          <div className={styles.cart__logo}></div>
          <h3 className={styles.cart__title}>Корзина</h3>
        </div>
        <button className={styles.cart__clearButton}>Очистить корзину</button>
      </div>
      <div className={styles.cartItemsContainer}>{children}</div>
      <div className={styles.cart__footer}>
        <div className={styles.cart__totalContainer}>
          <span className={styles.cart__totalQty}>Всего порций: 3 шт</span>
          <span className={styles.cart__totalSum}>Сумма заказа: 900 р</span>
        </div>
        <div className={styles.cart__buttonContainer}>
          <button className={styles.cart__backButton}>Назад к меню</button>
          <button className={styles.cart__checkoutButton}>Оплатить заказ</button>
        </div>
      </div>
    </section>
  );
}
