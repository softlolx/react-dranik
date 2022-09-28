import styles from "./Categories.module.scss";
import { SearchBar } from "../SearchBar";
import { useSelector } from "react-redux";

export function Categories({
  children,
  onSortPopupClick,
  selectedSortOptionText,
  onCategorySelect,
  // selectedCategory,
  onChangeSortOrder,
  sortOrder,
  onSearchBarChange,
}) {
  const categories = ["Все", "Мясные", "Веганские", "Грибные", "Рыбные", "Острые"];

  function handleCategoryClick(evt) {
    onCategorySelect(evt.target.id);
  }

  const selectedCategory = useSelector((state) => state.category.value);

  return (
    <section className={styles.cat}>
      <ul className={styles.cat__list}>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              id={index}
              className={`${styles.cat__item} ${
                selectedCategory == index ? styles.cat__item_active : ""
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
            !sortOrder ? "" : styles.sort__directionButton_updown
          }`}
          onClick={onChangeSortOrder}
        ></button>
        <span className={styles.sort__text}>Сортировка&nbsp;по:</span>
        <button className={styles.sort__optionButton} onClick={onSortPopupClick}>
          {selectedSortOptionText}
        </button>
        {children}
      </div>
    </section>
  );
}
