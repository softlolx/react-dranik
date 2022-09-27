import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";

import { SearchContext } from "../../contexts/SearchContext";

import { Header } from "../Header";
import { HomePage } from "../../pages/HomePage";
import { Cart } from "../../pages/Cart";
import { NotFound } from "../../pages/NotFound/NotFound";

function App() {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <SearchContext.Provider value={{ searchBarValue, setSearchBarValue }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </SearchContext.Provider>
      </section>
    </div>
  );
}

export default App;
