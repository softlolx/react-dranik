import styles from './SortPopup.module.scss';
import React, { useEffect, useRef } from 'react';

type SortPopupProps = {
  onOptionSelect: Function;
  onSortPopupClick: Function;
};

type OptionsListType = {
  name: string;
  value: string;
};

export function SortPopup({ onOptionSelect, onSortPopupClick }: SortPopupProps) {
  const optionsList: OptionsListType[] = [
    { name: 'популярности', value: 'rating' },
    { name: 'цене', value: 'price' },
    { name: 'алфавиту', value: 'title' },
  ];

  const sortPopupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: Event) => {
    if (sortPopupRef.current === null) {
      return;
    }
    if (!sortPopupRef.current.contains(e.target)) {
      onSortPopupClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  function handleOptionClick(evt: Event) {
    onOptionSelect(evt.target?.innerText, evt.target?.id);
  }

  return (
    <div ref={sortPopupRef} className={styles.sort__optionContainer}>
      <ul className={styles.sort__optionList}>
        {optionsList.map((item: OptionsListType) => {
          return (
            <li
              key={item.value}
              id={item.value}
              className={`${styles.sort__optionItem}`}
              onClick={handleOptionClick}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
