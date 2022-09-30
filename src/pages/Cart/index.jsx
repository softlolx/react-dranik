import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../../components/CartItem";

export function Cart({ children }) {
  const { cartItems, totalQty, totalPrice } = useSelector((state) => state.cart);

  return (
    <section className={styles.cart}>
      <div className={styles.cart__header}>
        <div className={styles.cart__headerlogoContainer}>
          <div className={styles.cart__logo}></div>
          <h3 className={styles.cart__title}>Корзина</h3>
        </div>
        <button className={styles.cart__clearButton}>Очистить корзину</button>
      </div>
      <div className={styles.cartItemsContainer}>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              type={item.type}
              size={item.size}
            />
          );
        })}
      </div>
      <div className={styles.cart__footer}>
        <div className={styles.cart__totalContainer}>
          <span className={styles.cart__totalQty}>Всего порций: {totalQty} шт</span>
          <span className={styles.cart__totalSum}>Сумма заказа: {totalPrice} р</span>
        </div>
        <div className={styles.cart__buttonContainer}>
          <Link to={"/"}>
            <button className={styles.cart__backButton}>Назад к меню</button>
          </Link>
          <button className={styles.cart__checkoutButton}>Оплатить заказ</button>
        </div>
      </div>
    </section>
  );
}
