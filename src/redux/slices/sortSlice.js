import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortOption: "rating",
  sortOptionText: "популярности",
  sortOrder: true,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortOption: (state, option) => {
      state.sortOption = option.payload;
    },
    setSortOptionText: (state, option) => {
      state.sortOptionText = option.payload;
    },
    setSortOrder: (state) => {
      state.sortOrder = !state.sortOrder;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSortOption, setSortOptionText, setSortOrder } = sortSlice.actions;

export default sortSlice.reducer;
