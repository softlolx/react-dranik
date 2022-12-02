import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import category from './slices/categorySlice';
import sort from './slices/sortSlice';
import cart from './slices/cartSlice';
import draniks from './slices/draniksSlice';
import search from './slices/searchSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  category,
  sort,
  cart,
  draniks,
  search,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
