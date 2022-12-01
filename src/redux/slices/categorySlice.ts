import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

interface categorySliceStateInterface {
  value: number;
}

const initialState: categorySliceStateInterface = {
  value: 0,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory: (state, category) => {
      state.value = category.payload;
    },
    setCategoryFromUrl: (state, option) => {
      state.value = +option.payload.selectedCategory;
    },
  },
});

export const selectCategory = (store: RootState) => store.category;

export const { setSelectedCategory, setCategoryFromUrl } = categorySlice.actions;

export default categorySlice.reducer;
