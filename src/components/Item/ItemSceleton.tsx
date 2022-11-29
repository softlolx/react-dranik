import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Item.module.scss';

const ItemSceleton = (props: Object) => (
  <ContentLoader
    className={styles.item}
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 148 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="6" rx="20" ry="20" width="140" height="120" />
    <rect x="5" y="140" rx="10" ry="10" width="140" height="40" />
    <rect x="6" y="195" rx="10" ry="10" width="140" height="62" />
    <rect x="83" y="271" rx="7" ry="7" width="65" height="28" />
    <rect x="8" y="271" rx="7" ry="7" width="50" height="28" />
  </ContentLoader>
);

export default ItemSceleton;
