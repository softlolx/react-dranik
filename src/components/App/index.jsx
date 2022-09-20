import { useEffect, useState } from "react";
import styles from "./App.module.scss";

import { Header } from "../Header";
import { Categories } from "../Categories";
import { Main } from "../Main";
import { Item } from "../Item";
import ItemSceleton from "../Item/ItemSceleton";
import { Cart } from "../Cart";
import { CartItem } from "../CartItem";
import { SortPopup } from "../SortPopup/SortPopup";

const BASE_URL = "https://6323b8a1bb2321cba91e1779.mockapi.io";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (function getItems() {
      fetch(`${BASE_URL}/items`)
        .then((res) => {
          if (!res.ok) {
            console.log(res.status);
            return;
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setItems(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

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
          {isLoading
            ? [...new Array(8)].map((_, i) => <ItemSceleton key={i} />)
            : items?.map((item) => {
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
