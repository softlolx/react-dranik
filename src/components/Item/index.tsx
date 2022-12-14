import React, { useState } from 'react';
import styles from './Item.module.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addCartItem } from '../../redux/slices/cartSlice';

export type ItemPropsType = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: string[];
  category: number;
  rating: number;
};

export function Item({
  id,
  imageUrl,
  title,
  price,
  types,
  sizes,
  category,
  rating,
}: ItemPropsType) {
  const dispatch = useDispatch();

  const [selectedType, setSelectedType] = useState('0');
  const [selectedSize, setSelectedSize] = useState('M');

  const itemTypes = ['диетические', 'со\u00A0сметаной'];

  function handleAddButtonCLick() {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: selectedType,
      size: selectedSize,
      typeText: itemTypes[+selectedType],
      count: 0,
      unitPrice: price,
    };

    dispatch(addCartItem(item));
  }

  function handleTypeClick(evt: React.MouseEvent) {
    setSelectedType((evt.target as Element)?.id);
  }

  function handleSizeClick(evt: React.MouseEvent) {
    setSelectedSize((evt.target as Element)?.id);
  }

  return (
    <div className={styles.item}>
      <Link to={`/dranik/${id}`} className={styles.item__imageLink}>
        <img src={imageUrl} alt="#" className={styles.item__image} />
      </Link>
      <h3 className={styles.item__name}>{title}</h3>
      <div className={styles.item__configContainer}>
        <div className={styles.item__specificButtons}>
          {types.map((item, index) => {
            return (
              <button
                key={index}
                id={item.toString()}
                className={`${styles.item__specificButton} ${
                  selectedType === item.toString() ? styles.item__specificButton_active : ''
                }`}
                onClick={handleTypeClick}
              >
                {itemTypes[item]}
              </button>
            );
          })}
        </div>
        <div className={styles.item__sizes}>
          {sizes.map((item, index) => {
            return (
              <button
                key={index}
                id={item}
                className={`${styles.item__sizeButton} ${
                  selectedSize === item ? styles.item__sizeButton_active : ''
                }`}
                onClick={handleSizeClick}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.item__bottomContainer}>
        <span className={styles.item__price}>от&#160;{price}&#8381;</span>
        <button className={`${styles.item__addButton} `} onClick={handleAddButtonCLick}>
          <div className={styles.item__addButtonIcon}></div>
          <span className={`${styles.item__addButtonText} `}>Добавить</span>
        </button>
      </div>
    </div>
  );
}
