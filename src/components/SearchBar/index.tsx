import React, { useEffect, useRef } from 'react';
import styles from './SearchBar.module.scss';
import debounce from 'lodash/debounce';

type SearchBarProps = {
  searchBarValue?: string;
  onSearchBarChange: (e: InputEvent) => void;
};

export function SearchBar({ searchBarValue, onSearchBarChange }: SearchBarProps) {
  const searchBarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      searchBarRef.current?.focus();
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
