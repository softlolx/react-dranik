import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SortSliceStateInterface {
  sortOption: string;
  sortOptionText: string;
  sortOrder: boolean;
}

const initialState: SortSliceStateInterface = {
  sortOption: 'rating',
  sortOptionText: 'популярности',
  sortOrder: true,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOption: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
    },
    setSortOptionText: (state, action: PayloadAction<string>) => {
      state.sortOptionText = action.payload;
    },
    setSortOrder: (state) => {
      state.sortOrder = !state.sortOrder;
    },
    setSortOptions: (state, action: PayloadAction<SortSliceStateInterface>) => {
      state.sortOption = action.payload.sortOption;
      state.sortOptionText = action.payload.sortOptionText;
      state.sortOrder = action.payload.sortOrder;
    },
  },
});

export const selectSorting = (store: RootState) => store.sort;

export const { setSortOption, setSortOptionText, setSortOrder, setSortOptions } = sortSlice.actions;

export default sortSlice.reducer;
