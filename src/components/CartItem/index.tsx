import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { plusItem, minusItem, removeCartItem } from '../../redux/slices/cartSlice';

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  typeText: string;
  size: string;
  count: number;
  unitPrice: number;
};

export function CartItem({
  id,
  title,
  price,
  imageUrl,
  type,
  typeText,
  size,
  count,
  unitPrice,
}: CartItemProps) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(
      removeCartItem({ id, title, price, imageUrl, type, typeText, size, count, unitPrice })
    );
  }

  function handlePlusItem() {
    dispatch(plusItem({ id, title, price, imageUrl, type, typeText, size, count, unitPrice }));
  }

  function handleMinusItem() {
    dispatch(minusItem({ id, title, price, imageUrl, type, typeText, size, count, unitPrice }));
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <img src={imageUrl} alt="#" className={styles.product__image} />
        <div className={styles.product__descriptionContainer}>
          <p className={styles.product__name}>{title}</p>
          <span className={styles.product__specs}>
            {size}, {typeText}
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
