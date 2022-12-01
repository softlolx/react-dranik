import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

interface sortSliceStateInterface {
  sortOption: string;
  sortOptionText: string;
  sortOrder: boolean;
}

const initialState: sortSliceStateInterface = {
  sortOption: 'rating',
  sortOptionText: 'популярности',
  sortOrder: true,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setSortOptionText: (state, action) => {
      state.sortOptionText = action.payload;
    },
    setSortOrder: (state) => {
      state.sortOrder = !state.sortOrder;
    },
    setSortOptions: (state, action) => {
      state.sortOption = action.payload.sortOption;
      state.sortOptionText = action.payload.sortOptionText;
    },
  },
});

export const selectSorting = (store: RootState) => store.sort;

export const { setSortOption, setSortOptionText, setSortOrder, setSortOptions } = sortSlice.actions;

export default sortSlice.reducer;
