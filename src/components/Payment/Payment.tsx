import React, { ReactElement } from 'react';
import styles from './Payment.module.scss';

type PaymentPropsType = {
  totalPrice: number;
  isOpen: boolean;
  closePopup: () => void;
};

export const Payment: JSX.Element = ({ totalPrice, isOpen, closePopup }: PaymentPropsType) => {
  if (isOpen) {
    return (
      <div className={styles.payment}>
        <button className={styles.payment__closeButton} onClick={closePopup}></button>
        {window.outerWidth >= 650 ? (
          <iframe
            width="728"
            height="200"
            src="https://widget.qiwi.com/widgets/big-widget-728x200?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPtoNsCpBNa5Lu5Rm1LGGBJsBje4U4b9Pk6RCbZpRovpjhRSAx8GoD12nx7RMo5pXTNvHGagwJBRD7vdq61175rXhEdigp3QtsSv1qQexqH"
            allowTransparency={true}
            scrolling="no"
            frameBorder="0"
          ></iframe>
        ) : (
          <iframe
            width="300"
            height="300"
            src="https://widget.qiwi.com/widgets/middle-widget-300x300?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPtoNsCpBNa5Lu5Rm1LGGBJsBje4U4b9Pk6RCbZpRovpjhRSAx8GoD12nx7RMo5pXTNvHGagwJBRD7vdq61175rXhEdigp3QtsSv1qQexqH"
            allowTransparency={true}
            scrolling="no"
            frameBorder="0"
          ></iframe>
        )}
      </div>
    );
  }
};
