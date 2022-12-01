import styles from './Main.module.scss';

type MainProps = { children?: any };

export function Main({ children }: MainProps) {
  return (
    <main className={styles.main}>
      <h2 className={styles.main__title}>Наши драники</h2>
      <div className={styles.main__itemsContainer}>{children}</div>
    </main>
  );
}
