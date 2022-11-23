import { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import { setSelectedCategory, setCategoryFromUrl } from '../redux/slices/categorySlice';
import {
  setSortOption,
  setSortOptionText,
  setSortOrder,
  setSortOptions,
} from '../redux/slices/sortSlice';
import { setItems } from '../redux/slices/draniksSlice';

import { Categories } from '../components/Categories';
import { Main } from '../components/Main';
import { Item } from '../components/Item';
import { SortPopup } from '../components/SortPopup';

import ItemSceleton from '../components/Item/ItemSceleton';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../contexts/SearchContext';
import { useRef } from 'react';

const BASE_URL = 'https://6323b8a1bb2321cba91e1779.mockapi.io';

export function HomePage() {
  const selectedCategory = useSelector((state) => state.category.value);
  const sortOption = useSelector((state) => state.sort.sortOption);
  const sortOptionText = useSelector((state) => state.sort.sortOptionText);
  const sortOrder = useSelector((state) => state.sort.sortOrder);
  const items = useSelector((state) => state.draniks.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchBarValue, setSearchBarValue } = useContext(SearchContext);

  const [isLoading, setIsLoading] = useState(true);
  const isSearching = useRef(false);
  const isMounted = useRef(false);

  const [isSortPopupOpened, setIsSortPopupOpened] = useState(false);
  const [pageLimit, setPageLimit] = useState(6);
  const [pageCount, setPageCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getItems();
  }, [currentPage, selectedCategory, sortOrder, sortOption, searchBarValue]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortOption,
        sortOptionText,
        selectedCategory,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sortOption, selectedCategory]);

  useEffect(() => {
    if (window.location.search) {
      const urlParams = qs.parse(window.location.search.substring(1));
      dispatch(setCategoryFromUrl(urlParams));
      dispatch(setSortOptions(urlParams));
      isSearching.current = true;
    }
  }, []);

  useEffect(() => {
    setPageCount(Math.floor(draniks.length / pageLimit) + 1);
  }, [items]);

  const draniks = items?.map((item) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        imgUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        types={item.types}
        sizes={item.sizes}
        category={item.category}
        rating={item.rating}
      />
    );
  });

  async function getItems() {
    setIsLoading(true);
    window.scroll(0, 0);

    try {
      const { data } = await axios.get(
        `${BASE_URL}/items?page=${currentPage}&limit=${pageLimit}&sortBy=${sortOption}&order=${
          sortOrder ? 'desc' : 'asc'
        }${selectedCategory > 0 ? '&category=' + `${selectedCategory}` : ''}${
          searchBarValue.length > 0 ? '&search=' + `${searchBarValue}` : ''
        }`
      );

      dispatch(setItems(data));

      setIsLoading(false);
    } catch (error) {
      console.log(error.code);
    } finally {
      if (sortOption === 'rating' && selectedCategory === '0') {
        navigate(``);
      }
    }
  }

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
        {isSortPopupOpened && (
          <SortPopup
            onSortPopupClick={handleSortPopupClick}
            onOptionSelect={handleSelectSortOption}
          />
        )}
      </Categories>
      <Main>{isLoading ? [...new Array(8)].map((_, i) => <ItemSceleton key={i} />) : draniks}</Main>
      <Pagination onPageChange={handlePageChange} pageLimit={pageLimit} pageCount={pageCount} />
    </>
  );
}
