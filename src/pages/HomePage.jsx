import { useEffect, useState, useContext } from "react";

import { Categories } from "../components/Categories";
import { Main } from "../components/Main";
import { Item } from "../components/Item";
import { SortPopup } from "../components/SortPopup";

import ItemSceleton from "../components/Item/ItemSceleton";
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../contexts/SearchContext";

const BASE_URL = "https://6323b8a1bb2321cba91e1779.mockapi.io";

export function HomePage() {
  const { searchBarValue, setSearchBarValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSortPopupOpened, setIsSortPopupOpened] = useState(false);
  const [currentSort, setCurrentSort] = useState("rating");
  const [selectedSortOptionText, setSelectedSortOptionText] = useState("популярности");
  const [sortOrder, setSortOrder] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const [pageLimit, setPageLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (function getItems() {
      setIsLoading(true);
      fetch(
        `${BASE_URL}/items?page=${currentPage}&limit=${pageLimit}&sortBy=${currentSort}&order=${
          sortOrder ? "desc" : "asc"
        }
        ${selectedCategory > 0 ? "&category=" + `${selectedCategory}` : ""}
        ${searchBarValue.length > 0 ? "&search=" + `${searchBarValue}` : ""}`
      )
        .then((res) => {
          if (!res.ok) {
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
  }, [selectedCategory, sortOrder, currentSort, searchBarValue, currentPage]);

  const draniks = items?.map((item) => {
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
  });

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
    setCurrentPage(1);
  }

  function handleSortOrderChange() {
    setSortOrder((prev) => !prev);
  }

  function handleSearchBarChange(e) {
    setSearchBarValue(e.target.value);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <Categories
        onSortPopupClick={handleSortPopupClick}
        onCategorySelect={handleCategorySelect}
        selectedSortOptionText={selectedSortOptionText}
        activeCategory={selectedCategory}
        onChangeSortOrder={handleSortOrderChange}
        sortOrder={sortOrder}
        onSearchBarChange={handleSearchBarChange}
        searchBarValue={searchBarValue}
      >
        {isSortPopupOpened && <SortPopup onOptionSelect={handleSelectSortOption} />}
      </Categories>
      <Main>
        {isLoading ? [...new Array(10)].map((_, i) => <ItemSceleton key={i} />) : draniks}
      </Main>
      <Pagination onPageChange={handlePageChange} />
    </>
  );
}
