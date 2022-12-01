import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setSelectedCategory: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setCategoryFromUrl: (state, action) => {
      state.value = +action.payload.selectedCategory;
    },
  },
});

export const selectCategory = (store: RootState) => store.category;

export const { setSelectedCategory, setCategoryFromUrl } = categorySlice.actions;

export default categorySlice.reducer;
