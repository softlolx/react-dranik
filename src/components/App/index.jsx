import { useState } from "react";
import styles from "./App.module.scss";
import { data } from "../../utils/fakeApi";

import { Header } from "../Header";
import { Categories } from "../Categories";
import { Main } from "../Main";
import { Item } from "../Item";
import { Cart } from "../Cart";
import { CartItem } from "../CartItem";
import { SortPopup } from "../SortPopup/SortPopup";

function App() {
  const [isSortPopupOpened, setIsSortPopupOpened] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("популярности");

  function handleSelectSortOption(text) {
    setSelectedSortOption(text);
    setIsSortPopupOpened((prev) => !prev);
  }

  function handleSortPopupClick() {
    setIsSortPopupOpened((prev) => !prev);
  }

  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />
        <Categories onSortPopupClick={handleSortPopupClick} selectedSortOption={selectedSortOption}>
          {isSortPopupOpened && <SortPopup onOptionSelect={handleSelectSortOption} />}
        </Categories>
        {/* <Cart>
          <CartItem />
          <CartItem />
          <CartItem />
        </Cart> */}
        <Main>
          {data.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                imgUrl={item.imageUrl}
                name={item.title}
                price={item.price}
                types={item.types}
                sizes={item.sizes}
                category={item.category}
                rating={item.rating}
              />
            );
          })}
        </Main>
      </section>
    </div>
  );
}

export default App;
