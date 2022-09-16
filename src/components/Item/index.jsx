import styles from "./Item.module.scss";

export function Item() {
  return (
    <div className="item">
      <img src="#" alt="#" className="item__image" />
      <h3 className="item__name">Классические</h3>
      <div className="item__configContainer">
        <button className="item__configButton">диетические</button>
        <button className="item__configButton">со сметаной</button>
        <button className="item__configButton">M</button>
        <button className="item__configButton">L</button>
        <button className="item__configButton">XL</button>
      </div>
      <div className="item__bottomContainer">
        <span className="item__price">от 395 &#8381;</span>
        <button className="item__addButton">
          <div className="item__addButtonIcon"></div>
          <span className="item__addButtonText">Добавить</span>
          <span className="item__addButtonQty">2</span>
        </button>
      </div>
    </div>
  );
}
