// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";

import { Header } from "../Header";
// import { Categories } from "../Categories";
// import { Main } from "../Main";
// import { Item } from "../Item";
// import ItemSceleton from "../Item/ItemSceleton";
// import { Cart } from "../Cart";
// import { CartItem } from "../CartItem";
// import { SortPopup } from "../SortPopup/SortPopup";

import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { NotFoundPage } from "../../pages/NotFoundPage";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
