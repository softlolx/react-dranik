import styles from "./App.module.scss";

import { Header } from "../Header";
import { Categories } from "../Categories";
import { Main } from "../Main";
import { Item } from "../Item";
import { Cart } from "../Cart";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />
        <Cart />
        {/* <Categories />
        <Main>
          <Item />
        </Main> */}
      </section>
    </div>
  );
}

export default App;
