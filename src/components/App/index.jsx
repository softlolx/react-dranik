import styles from "./App.module.scss";

import { Header } from "../Header";
import { Categories } from "../Categories";
import { Main } from "../Main";
import { Item } from "../Item";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />
        <Categories />
        <Main>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Main>
      </section>
    </div>
  );
}

export default App;
