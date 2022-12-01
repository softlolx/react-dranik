import { RootState } from './../store';
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const BASE_URL = 'https://6323b8a1bb2321cba91e1779.mockapi.io';

export const fetchDraniks = createAsyncThunk('draniks/fetchDraniksFromApi', async (params) => {
  const { currentPage, pageLimit, sortOption, sortOrder, selectedCategory, searchBarValue } =
    params;
  const { data } = await axios.get(
    `${BASE_URL}/items?page=${currentPage}&limit=${pageLimit}&sortBy=${sortOption}&order=${
      sortOrder ? 'desc' : 'asc'
    }${selectedCategory.value > 0 ? '&category=' + `${selectedCategory.value}` : ''}${
      searchBarValue.length > 0 ? '&search=' + `${searchBarValue}` : ''
    }`
  );
  return data;
});

type ItemType = {
  id: string;
  imgUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: string[];
  category: number;
  rating: number;
};

interface DraniksSliceStateInterface {
  items: ItemType[];
  isLoading: boolean;
}

const initialState: DraniksSliceStateInterface = {
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
    [fetchDraniks.pending]: (state) => {
      state.isLoading = true;
      state.items = [];
    },
    [fetchDraniks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchDraniks.rejected]: (state) => {
      state.items = [];
      state.isLoading = true;
    },
  },
});

export const selectDraniks = (store: RootState) => store.draniks;

export const { setItems, setIsLoading } = draniksSlice.actions;

export default draniksSlice.reducer;
