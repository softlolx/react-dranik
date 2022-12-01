import React from 'react';
import { ReactElement } from 'react';
import { useState } from 'react';
import styles from './DranikFull.module.scss';
import { useDispatch } from 'react-redux';

import { addCartItem, CartItemType } from '../../redux/slices/cartSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { ItemPropsType } from '../../components/Item';

export function DranikFull(): ReactElement {
  const [fetchedItem, setFetchedItem] = useState<ItemPropsType>();

  const [selectedType, setSelectedType] = useState('0');
  const [selectedSize, setSelectedSize] = useState('M');

  const dispatch = useDispatch();
  const { id } = useParams<string>();

  useEffect(() => {
    async function getDranik() {
      try {
        const { data } = await axios.get('https://6323b8a1bb2321cba91e1779.mockapi.io/items/' + id);
        setFetchedItem(data);
      } catch (error) {
        console.log(error);
      }
    }

    getDranik();
  }, []);

  const itemTypes = ['диетические', 'со\u00A0сметаной'];

  function handleAddButtonCLick() {
    const item = {
      ...fetchedItem,
      type: selectedType,
      size: selectedSize,
      typeText: itemTypes[+selectedType],
      count: 0,
      unitPrice: fetchedItem!.price,
    };

    dispatch(addCartItem(item as CartItemType));
  }

  function handleTypeClick(evt: React.MouseEvent) {
    setSelectedType((evt.target as Element).id);
  }

  function handleSizeClick(evt: React.MouseEvent) {
    setSelectedSize((evt.target as Element).id);
  }

  if (fetchedItem) {
    return (
      <div className={styles.item}>
        <img src={fetchedItem.imageUrl} alt="#" className={styles.item__image} />
        <h3 className={styles.item__name}>{fetchedItem.title}</h3>
        <div className={styles.item__configContainer}>
          <div className={styles.item__specificButtons}>
            {fetchedItem.types.map((item, index) => {
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
            {fetchedItem.sizes.map((item, index) => {
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
          <span className={styles.item__price}>от&#160;{fetchedItem.price}&#8381;</span>
          <button className={`${styles.item__addButton} `} onClick={handleAddButtonCLick}>
            <div className={styles.item__addButtonIcon}></div>
            <span className={`${styles.item__addButtonText} `}>Добавить</span>
          </button>
        </div>
      </div>
    );
  }

  return <>It`s loading...</>;
}
