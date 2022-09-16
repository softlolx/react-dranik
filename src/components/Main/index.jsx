import styles from "./Main.module.scss";

export function Main({ children }) {
  return (
    <main className={styles.main}>
      <h2 className={styles.main__title}>Наши драники</h2>
      <div className={styles.main__itemsContainer}>{children}</div>
    </main>
  );
}
