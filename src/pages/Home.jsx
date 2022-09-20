import { useEffect, useState } from "react";

import { Categories } from "../components/Categories";
import { Main } from "../components/Main";
import { Item } from "../components/Item";
import { SortPopup } from "../components/SortPopup/SortPopup";
import ItemSceleton from "../components/Item/ItemSceleton";

const BASE_URL = "https://6323b8a1bb2321cba91e1779.mockapi.io";

export function Home() {
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
    <>
      <Categories onSortPopupClick={handleSortPopupClick} selectedSortOption={selectedSortOption}>
        {isSortPopupOpened && <SortPopup onOptionSelect={handleSelectSortOption} />}
      </Categories>
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
    </>
  );
}
