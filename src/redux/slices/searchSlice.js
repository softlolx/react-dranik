import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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

export const selectSearch = (state) => state.search;

export const { setSearchBarValue } = searchSlice.actions;

export default searchSlice.reducer;
