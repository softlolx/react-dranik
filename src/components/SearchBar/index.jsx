import styles from "./SearchBar.module.scss";

export function SearchBar({ searchBarValue, onSearchBarChange }) {
  return (
    <input
      className={styles.search__input}
      placeholder="Поиск..."
      onChange={onSearchBarChange}
      value={searchBarValue}
    ></input>
  );
}
