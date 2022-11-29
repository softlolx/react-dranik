import styles from './Categories.module.scss';

import { SearchBar } from '../SearchBar';
import { useSelector } from 'react-redux';

type CategorieProps = {
  children: JSX.Element;
  onSortPopupClick: Function;
  onCategorySelect: Function;
  onChangeSortOrder: Function;
  onSearchBarChange: Function;
};

export function Categories({
  children,
  onSortPopupClick,
  onCategorySelect,
  onChangeSortOrder,
  onSearchBarChange,
}: CategorieProps) {
  const categories = ['Все', 'Мясные', 'Веганские', 'Грибные', 'Рыбные', 'Острые'];

  function handleCategoryClick(evt) {
    onCategorySelect(evt.target.id);
  }

  const selectedCategory = useSelector((state) => state.category.value);
  const sortOptionText = useSelector((state) => state.sort.sortOptionText);
  const sortOrder = useSelector((state) => state.sort.sortOrder);

  return (
    <section className={styles.cat}>
      <ul className={styles.cat__list}>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              id={index}
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