import { useState } from 'react';
import styles from './DranikFull.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDraniks, selectDraniks } from '../../redux/slices/draniksSlice';
import { addCartItem } from '../../redux/slices/cartSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export function DranikFull() {
  const [item, setItem] = useState();
  const [selectedType, setSelectedType] = useState('0');
  const [selectedSize, setSelectedSize] = useState('M');

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function getDranik() {
      try {
        const { data } = await axios.get('https://6323b8a1bb2321cba91e1779.mockapi.io/items/' + id);
        setItem(data);
        console.log(item);
      } catch (error) {
        console.log(error);
      }
    }

    getDranik();
  }, []);

  const itemTypes = ['диетические', 'со\u00A0сметаной'];

  function handleAddButtonCLick() {
    dispatch(addCartItem(item));
  }

  function handleTypeClick(evt) {
    setSelectedType(evt.target.id);
  }

  function handleSizeClick(evt) {
    setSelectedSize(evt.target.id);
  }

  return (
    item && (
      <div className={styles.item}>
        <img src={item.imageUrl} alt="#" className={styles.item__image} />
        <h3 className={styles.item__name}>{item.title}</h3>
        <div className={styles.item__configContainer}>
          <div className={styles.item__specificButtons}>
            {item.types.map((item, index) => {
              return (
                <button
                  key={index}
                  id={item}
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
            {item.sizes.map((item, index) => {
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
          <span className={styles.item__price}>от&#160;{item.price}&#8381;</span>
          <button className={`${styles.item__addButton} `} onClick={handleAddButtonCLick}>
            <div className={styles.item__addButtonIcon}></div>
            <span className={`${styles.item__addButtonText} `}>Добавить</span>
          </button>
        </div>
      </div>
    )
  );
}
