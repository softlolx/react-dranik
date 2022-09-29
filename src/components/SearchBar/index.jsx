import { useEffect } from "react";
import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { debounce } from "lodash";

export function SearchBar({ searchBarValue, onSearchBarChange }) {
  const searchBarRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 1024) {
      searchBarRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={searchBarRef}
      className={styles.search__input}
      placeholder="Поиск..."
      onChange={debounce((e) => onSearchBarChange(e), 300)}
      value={searchBarValue}
    ></input>
  );
}
