import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { plusItem, minusItem, removeCartItem } from '../../redux/slices/cartSlice';

export function CartItem({ id, title, price, imgUrl, type, size, count, unitPrice }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(removeCartItem({ id, unitPrice, count }));
  }

  function handlePlusItem() {
    dispatch(plusItem({ id, price }));
  }

  function handleMinusItem() {
    dispatch(minusItem({ id, price }));
  }

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
        <button className={styles.cartItem__removeQtyButton} onClick={handleMinusItem}></button>
        <span className={styles.cartItem__qty}>{count}</span>
        <button className={styles.cartItem__addQtyButton} onClick={handlePlusItem}></button>
      </div>
      <span className={styles.cartItem__sum}>{unitPrice}</span>
      <button className={styles.cartItem__removeButton} onClick={handleDeleteItem}></button>
    </div>
  );
}
