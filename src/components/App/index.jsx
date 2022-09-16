import styles from "./App.module.scss";

import { Header } from "../Header";
import { Categories } from "../Categories";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />
        <Categories />
      </section>
    </div>
  );
}

export default App;
