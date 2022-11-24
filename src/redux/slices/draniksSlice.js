import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const BASE_URL = 'https://6323b8a1bb2321cba91e1779.mockapi.io';

export const fetchDraniks = createAsyncThunk('draniks/fetchDraniksFromApi', async (params) => {
  const { currentPage, pageLimit, sortOption, sortOrder, selectedCategory, searchBarValue } =
    params;
  const { data } = await axios.get(
    `${BASE_URL}/items?page=${currentPage}&limit=${pageLimit}&sortBy=${sortOption}&order=${
      sortOrder ? 'desc' : 'asc'
    }${selectedCategory > 0 ? '&category=' + `${selectedCategory}` : ''}${
      searchBarValue.length > 0 ? '&search=' + `${searchBarValue}` : ''
    }`
  );
  return data;
});

const initialState = {
  items: [],
  isLoading: true,
};

export const draniksSlice = createSlice({
  name: 'draniks',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchDraniks.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems, setIsLoading } = draniksSlice.actions;

export default draniksSlice.reducer;
