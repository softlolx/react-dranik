import styles from "./SearchBar.module.scss";

export function SearchBar({ searchBarValue, onSearchBarChange }) {
  return (
    <input
      className={styles.search__input}
      placeholder="Поиск..."
      onChange={(e) => onSearchBarChange(e)}
      value={searchBarValue}
    ></input>
  );
}
