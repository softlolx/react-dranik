import styles from "./SortPopup.module.scss";

export function SortPopup({ onOptionSelect }) {
  const optionsList = [
    { name: "популярности", value: "rating" },
    { name: "цене", value: "price" },
    { name: "алфавиту", value: "title" },
  ];

  function handleOptionClick(evt) {
    onOptionSelect(evt.target.innerText, evt.target.id);
    console.log(evt);
  }

  return (
    <div className={styles.sort__optionContainer}>
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
