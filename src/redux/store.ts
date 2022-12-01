import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categorySlice';
import sort from './slices/sortSlice';
import cart from './slices/cartSlice';
import draniks from './slices/draniksSlice';
import search from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    category,
    sort,
    cart,
    draniks,
    search,
  },
});
