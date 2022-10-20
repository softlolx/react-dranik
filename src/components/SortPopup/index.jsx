import styles from './SortPopup.module.scss';
import { useEffect, useRef } from 'react';
export function SortPopup({ onOptionSelect, onSortPopupClick }) {
  const optionsList = [
    { name: 'популярности', value: 'rating' },
    { name: 'цене', value: 'price' },
    { name: 'алфавиту', value: 'title' },
  ];

  const sortPopupRef = useRef();

  const handleClickOutside = (e) => {
    if (!sortPopupRef.current.contains(e.target)) {
      onSortPopupClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  function handleOptionClick(evt) {
    onOptionSelect(evt.target.innerText, evt.target.id);
  }

  return (
    <div ref={sortPopupRef} className={styles.sort__optionContainer}>
      <ul className={styles.sort__optionList}>
        {optionsList.map((item) => {
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
