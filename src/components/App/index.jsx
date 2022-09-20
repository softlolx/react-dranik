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

import { Home } from "../../pages/Home";
import { CartPage } from "../../pages/CartPage";
import { NotFound } from "../../pages/NotFound";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
