import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoContainer}>
        <img src="#" alt="#" className={styles.header__logo} />
        <div className={styles.header__titleContainer}>
          <h1 className={styles.header__title}>react dranik</h1>
          <p className={styles.header__subtitle}>Самые крутые драники в мире</p>
        </div>
      </div>

      <button className={styles.cartButton}>
        <div className={styles.cartButton__sumContainer}>
          <span className={styles.cartButton__sum}>&#8381; 520</span>
        </div>
        <div className={styles.cartButton__qtyContainer}>
          <div className={styles.cartButton__cartIcon}></div>
          <span className={styles.cartButton__totalQty}>3</span>
        </div>
      </button>
    </header>
  );
}
