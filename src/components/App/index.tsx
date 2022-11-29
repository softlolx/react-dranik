import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';

import { Header } from '../Header';
import { HomePage } from '../../pages/HomePage';
import { Cart } from '../../pages/Cart';
import { NotFound } from '../../pages/NotFound/NotFound';
import { DranikFull } from '../../pages/DranikFull';

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/dranik/:id" element={<DranikFull />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
