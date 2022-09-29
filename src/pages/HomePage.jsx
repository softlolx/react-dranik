import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";

import { setSelectedCategory } from "../redux/slices/categorySlice";
import { setSortOption, setSortOptionText, setSortOrder } from "../redux/slices/sortSlice";

import { Categories } from "../components/Categories";
import { Main } from "../components/Main";
import { Item } from "../components/Item";
import { SortPopup } from "../components/SortPopup";

import ItemSceleton from "../components/Item/ItemSceleton";
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../contexts/SearchContext";

const BASE_URL = "https://6323b8a1bb2321cba91e1779.mockapi.io";

export function HomePage() {
  const selectedCategory = useSelector((state) => state.category.value);
  const sortOption = useSelector((state) => state.sort.sortOption);
  const sortOrder = useSelector((state) => state.sort.sortOrder);
  const dispatch = useDispatch();

  const { searchBarValue, setSearchBarValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSortPopupOpened, setIsSortPopupOpened] = useState(false);
  const [pageLimit, setPageLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const queryString = qs.stringify();
  });

  useEffect(() => {
    (function getItems() {
      setIsLoading(true);
      axios
        .get(
          `${BASE_URL}/items?page=${currentPage}&limit=${pageLimit}&sortBy=${sortOption}&order=${
            sortOrder ? "desc" : "asc"
          }
      ${selectedCategory > 0 ? "&category=" + `${selectedCategory}` : ""}
      ${searchBarValue.length > 0 ? "&search=" + `${searchBarValue}` : ""}`
        )
        .then((res) => {
          if (res.statusText === "OK") {
            setItems(res.data);
            setIsLoading(false);
          }
          return;
        })
        .catch((error) => console.log(error.code));
    })();
  }, [selectedCategory, sortOrder, sortOption, searchBarValue, currentPage]);

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
    dispatch(setSortOption(value));
    dispatch(setSortOptionText(text));
    setIsSortPopupOpened((prev) => !prev);
  }

  function handleSortOrderChange() {
    dispatch(setSortOrder());
  }

  function handleSortPopupClick() {
    setIsSortPopupOpened((prev) => !prev);
  }

  function handleCategorySelect(id) {
    dispatch(setSelectedCategory(id));
    setCurrentPage(1);
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
        onChangeSortOrder={handleSortOrderChange}
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
