import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import {
  setSelectedCategory,
  setCategoryFromUrl,
  selectCategory,
} from '../redux/slices/categorySlice';
import {
  setSortOption,
  setSortOptionText,
  setSortOrder,
  setSortOptions,
  selectSorting,
} from '../redux/slices/sortSlice';
import { fetchDraniks, selectDraniks } from '../redux/slices/draniksSlice';
import { setSearchBarValue, selectSearch } from '../redux/slices/searchSlice';

import { Categories } from '../components/Categories';
import { Main } from '../components/Main';
import { Item } from '../components/Item';
import { SortPopup } from '../components/SortPopup';

import ItemSceleton from '../components/Item/ItemSceleton';
import { Pagination } from '../components/Pagination';
import { useRef } from 'react';

type MainItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: string[];
  category: number;
  rating: number;
};

export function HomePage() {
  const selectedCategory = useSelector(selectCategory);
  const { sortOption, sortOptionText, sortOrder } = useSelector(selectSorting);
  const { searchBarValue } = useSelector(selectSearch);
  const { items, isLoading } = useSelector(selectDraniks);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isSearching = useRef(false);
  const isMounted = useRef(false);

  const [isSortPopupOpened, setIsSortPopupOpened] = useState<any>(false);
  const [pageLimit, setPageLimit] = useState(8);
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

      // this package can`t be typed properly
      dispatch(setSortOptions(urlParams as any));
      isSearching.current = true;
    }
  }, []);

  useEffect(() => {
    setPageCount(Math.ceil(draniks.length / pageLimit) + 1);
  }, [items]);

  const draniks = items?.map((item: MainItemProps) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
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
    window.scroll(0, 0);

    try {
      await dispatch(
        fetchDraniks({
          currentPage,
          pageLimit,
          sortOption,
          sortOrder,
          selectedCategory,
          searchBarValue,
        })
      );
    } catch (error: any) {
      console.log(error.code);
    } finally {
      if (sortOption === 'rating' && selectedCategory.value.toString() === '0') {
        navigate(``);
      }
    }
  }

  function handleSelectSortOption(text: string, value: string) {
    dispatch(setSortOption(value));
    dispatch(setSortOptionText(text));
    setIsSortPopupOpened((prev: Boolean) => !prev);
  }

  function handleSortOrderChange() {
    dispatch(setSortOrder());
  }

  function handleSortPopupClick() {
    setIsSortPopupOpened((prev: Boolean) => !prev);
  }

  function handleCategorySelect(id: string) {
    dispatch(setSelectedCategory(+id));
    setCurrentPage(1);
  }

  function handleSearchBarChange(e: InputEvent) {
    dispatch(setSearchBarValue((e.target as HTMLInputElement)?.value));
  }

  function handlePageChange(page: number) {
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
        {isSortPopupOpened ? (
          <SortPopup
            onSortPopupClick={handleSortPopupClick}
            onOptionSelect={handleSelectSortOption}
          />
        ) : null}
      </Categories>
      <Main>{isLoading ? [...new Array(8)].map((_, i) => <ItemSceleton key={i} />) : draniks}</Main>
      <Pagination onPageChange={handlePageChange} pageLimit={pageLimit} pageCount={pageCount} />
    </>
  );
}
