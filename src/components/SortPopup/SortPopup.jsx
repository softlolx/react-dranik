import { useState } from "react";
import styles from "./SortPopup.module.scss";

export function SortPopup({ onOptionSelect }) {
  const [selectedOption, setSelectedOption] = useState();
  const optionsList = [
    { name: "популярности", value: "rating" },
    { name: "цене", value: "price" },
    { name: "алфавиту", value: "title" },
  ];

  function handleOptionClick(evt) {
    setSelectedOption(evt.target.id);

    onOptionSelect(evt.target.innerText, evt.target.id);
    console.log(evt);
  }

  return (
    <div className={styles.sort__optionContainer}>
      <ul className={styles.sort__optionList}>
        {optionsList.map((item, index) => {
          return (
            <li
              key={item.value}
              id={item.value}
              className={`${styles.sort__optionItem} ${
                selectedOption == index ? styles.sort__optionItem_active : ""
              }`}
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
