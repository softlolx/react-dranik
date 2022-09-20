import styles from "./Categories.module.scss";
import { SearchBar } from "../SearchBar";

export function Categories({
  children,
  onSortPopupClick,
  selectedSortOptionText,
  onCategorySelect,
  activeCategory,
  onChangeSortOrder,
  sortOrder,
}) {
  const categories = ["Все", "Мясные", "Веганские", "Грибные", "Рыбные", "Острые"];

  function handleCategoryClick(evt) {
    onCategorySelect(evt.target.id);
  }

  return (
    <section className={styles.cat}>
      <ul className={styles.cat__list}>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              id={index}
              className={`${styles.cat__item} ${
                activeCategory == index ? styles.cat__item_active : ""
              }`}
              onClick={handleCategoryClick}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <SearchBar />
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
