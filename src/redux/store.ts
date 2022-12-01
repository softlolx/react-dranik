import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categorySlice';
import sort from './slices/sortSlice';
import cart from './slices/cartSlice';
import draniks from './slices/draniksSlice';
import search from './slices/searchSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    category,
    sort,
    cart,
    draniks,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
