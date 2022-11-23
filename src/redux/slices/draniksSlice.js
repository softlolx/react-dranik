import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const draniksSlice = createSlice({
  name: 'draniks',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = draniksSlice.actions;

export default draniksSlice.reducer;
