import styles from "./App.module.scss";
import { data } from "../../utils/fakeApi";

import { Header } from "../Header";
import { Categories } from "../Categories";
import { Main } from "../Main";
import { Item } from "../Item";
import { Cart } from "../Cart";
import { CartItem } from "../CartItem";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />
        {/* <Cart>
          <CartItem />
          <CartItem />
          <CartItem />
        </Cart> */}
        <Categories />
        <Main>
          {data.map((item) => {
            return <Item key={item.id} imgUrl={item.imageUrl} name={item.title} />;
          })}
        </Main>
      </section>
    </div>
  );
}

export default App;
