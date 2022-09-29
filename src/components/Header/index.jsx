import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  const { totalQty, totalPrice } = useSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <div className={styles.header__logoContainer}>
          <img src={logo} alt="#" className={styles.header__logo} />
          <div className={styles.header__titleContainer}>
            <h1 className={styles.header__title}>react dranik</h1>
            <p className={styles.header__subtitle}>Самые крутые драники</p>
          </div>
        </div>
      </Link>

      <Link to={"/cart"}>
        <button className={styles.cartButton}>
          <span className={styles.cartButton__sum}>{totalPrice}&#160;&#8381;</span>
          <div className={styles.cartButton__line}></div>
          <div className={styles.cartButton__qtyContainer}>
            <div className={styles.cartButton__cartIcon}></div>
            <span className={styles.cartButton__totalQty}>{totalQty}</span>
          </div>
        </button>
      </Link>
    </header>
  );
}
