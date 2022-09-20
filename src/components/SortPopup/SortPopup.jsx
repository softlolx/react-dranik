import { useState } from "react";
import styles from "./SortPopup.module.scss";

export function SortPopup({ onOptionSelect }) {
  const [selectedOption, setSelectedOption] = useState();
  const optionsList = ["популярности", "цене", "алфавиту"];

  function handleOptionClick(evt) {
    setSelectedOption(evt.target.id);

    onOptionSelect(evt.target.innerText);
  }

  return (
    <div className={styles.sort__optionContainer}>
      <ul className={styles.sort__optionList}>
        {optionsList.map((item, index) => {
          return (
            <li
              key={index}
              id={index}
              className={`${styles.sort__optionItem} ${
                selectedOption == index ? styles.sort__optionItem_active : ""
              }`}
              onClick={handleOptionClick}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
