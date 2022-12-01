import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

interface searchSliceStateInterface {
  searchBarValue: string;
}

const initialState: searchSliceStateInterface = {
  searchBarValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchBarValue: (state, action) => {
      state.searchBarValue = action.payload;
    },
  },
});

export const selectSearch = (store: RootState) => store.search;

export const { setSearchBarValue } = searchSlice.actions;

export default searchSlice.reducer;
