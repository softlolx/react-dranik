import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const categorySlice = createSlice({
  name: "category",
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

// Action creators are generated for each case reducer function
export const { setSelectedCategory, setCategoryFromUrl } = categorySlice.actions;

export default categorySlice.reducer;
