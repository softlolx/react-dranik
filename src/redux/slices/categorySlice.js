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
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setSelectedCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
