import styles from "./App.module.scss";

import { Header } from "../Header";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />
      </section>
    </div>
  );
}

export default App;
