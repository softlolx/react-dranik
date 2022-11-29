import React from 'react';
import styles from './Categories.module.scss';

import { SearchBar } from '../SearchBar';
import { useSelector } from 'react-redux';

type CategorieProps = {
  children: any;
  onSortPopupClick: () => void;
  onCategorySelect: (e: string) => void;
  onChangeSortOrder: () => void;
  onSearchBarChange: (e: InputEvent, searchBarValue?: string) => void;
  searchBarValue: string;
};

export function Categories({
  children,
  onSortPopupClick,
  onCategorySelect,
  onChangeSortOrder,
  onSearchBarChange,
}: CategorieProps) {
  const categories = ['Все', 'Мясные', 'Веганские', 'Грибные', 'Рыбные', 'Острые'];

  function handleCategoryClick(evt: React.MouseEvent) {
    onCategorySelect((evt.target as Element)?.id);
  }

  const selectedCategory = useSelector((state: any) => state.category.value);
  const sortOptionText = useSelector((state: any) => state.sort.sortOptionText);
  const sortOrder = useSelector((state: any) => state.sort.sortOrder);

  return (
    <section className={styles.cat}>
      <ul className={styles.cat__list}>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              id={index.toString()}
              className={`${styles.cat__item} ${
                selectedCategory == index ? styles.cat__item_active : ''
              }`}
              onClick={handleCategoryClick}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <SearchBar onSearchBarChange={onSearchBarChange} />
      <div className={styles.sort}>
        <button
          className={`${styles.sort__directionButton} ${
            !sortOrder ? '' : styles.sort__directionButton_updown
          }`}
          onClick={onChangeSortOrder}
        ></button>
        <span className={styles.sort__text}>Сортировка&nbsp;по:</span>
        <button className={styles.sort__optionButton} onClick={onSortPopupClick}>
          {sortOptionText}
        </button>
        {children}
      </div>
    </section>
  );
}
