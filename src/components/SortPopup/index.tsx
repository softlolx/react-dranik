import styles from './SortPopup.module.scss';
import React, { useEffect, useRef } from 'react';

type SortPopupProps = {
  onOptionSelect: Function;
  onSortPopupClick: () => void;
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

  const handleClickOutside = (evt: MouseEvent) => {
    if (!sortPopupRef.current?.contains(evt.target as Element)) {
      onSortPopupClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  function handleOptionClick(evt: React.MouseEvent) {
    onOptionSelect((evt.target as HTMLElement)?.innerText, (evt.target as Element)?.id);
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
