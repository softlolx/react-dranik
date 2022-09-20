import { useEffect, useState } from "react";

import { Categories } from "../components/Categories";
import { Main } from "../components/Main";
import { Item } from "../components/Item";
import { SortPopup } from "../components/SortPopup";
import ItemSceleton from "../components/Item/ItemSceleton";

import { CurrentSortContext } from "../contexts/CurrentSortContext";

const BASE_URL = "https://6323b8a1bb2321cba91e1779.mockapi.io";

export function HomePage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSortPopupOpened, setIsSortPopupOpened] = useState(false);
  const [currentSort, setCurrentSort] = useState("rating");
  const [selectedSortOptionText, setSelectedSortOptionText] = useState("популярности");
  const [sortOrder, setSortOrder] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    (function getItems() {
      setIsLoading(true);
      fetch(
        `${BASE_URL}/items?sortBy=${currentSort}&order=${sortOrder ? "desc" : "asc"}${
          selectedCategory > 0 ? "&category=" + `${selectedCategory}` : ""
        }`
      )
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
  }, [selectedCategory, sortOrder, currentSort]);

  function handleSelectSortOption(text, value) {
    setSelectedSortOptionText(text);
    setCurrentSort(value);
    setIsSortPopupOpened((prev) => !prev);
  }

  function handleSortPopupClick() {
    setIsSortPopupOpened((prev) => !prev);
  }

  function handleCategorySelect(id) {
    setSelectedCategory(id);
  }

  function handleSortOrderChange() {
    setSortOrder((prev) => !prev);
  }

  return (
    <CurrentSortContext.Provider value={currentSort}>
      <Categories
        onSortPopupClick={handleSortPopupClick}
        onCategorySelect={handleCategorySelect}
        selectedSortOptionText={selectedSortOptionText}
        activeCategory={selectedCategory}
        onChangeSortOrder={handleSortOrderChange}
        sortOrder={sortOrder}
      >
        {isSortPopupOpened && <SortPopup onOptionSelect={handleSelectSortOption} />}
      </Categories>
      <Main>
        {isLoading
          ? [...new Array(10)].map((_, i) => <ItemSceleton key={i} />)
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
    </CurrentSortContext.Provider>
  );
}
