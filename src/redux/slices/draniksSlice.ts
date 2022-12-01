import { RootState } from './../store';
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const BASE_URL = 'https://6323b8a1bb2321cba91e1779.mockapi.io';

type FetchDraniksParamsType = {
  currentPage: number;
  pageLimit: number;
  sortOption: string;
  sortOrder: boolean;
  selectedCategory: any;
  searchBarValue: string;
};

type ItemType = {
  id: string;
  imageUrl: string;
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

export const fetchDraniks = createAsyncThunk<ItemType[], FetchDraniksParamsType>(
  'draniks/fetchDraniksFromApi',
  async (params: FetchDraniksParamsType) => {
    const { currentPage, pageLimit, sortOption, sortOrder, selectedCategory, searchBarValue } =
      params;
    const { data } = await axios.get<ItemType[]>(
      `${BASE_URL}/items?page=${currentPage}&limit=${pageLimit}&sortBy=${sortOption}&order=${
        sortOrder ? 'desc' : 'asc'
      }${selectedCategory.value > 0 ? '&category=' + `${selectedCategory.value}` : ''}${
        searchBarValue.length > 0 ? '&search=' + `${searchBarValue}` : ''
      }`
    );
    return data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchDraniks.pending, (state) => {
      state.isLoading = true;
      state.items = [];
    });
    builder.addCase(fetchDraniks.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchDraniks.rejected, (state) => {
      state.items = [];
      state.isLoading = true;
    });
  },
});

export const selectDraniks = (store: RootState) => store.draniks;

export const { setItems, setIsLoading } = draniksSlice.actions;

export default draniksSlice.reducer;
