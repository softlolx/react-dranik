import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, option) => {
      state.cartItems.push(option.payload);
    },
    removeCartItem: (state, option) => {
      state.cartItems.filter((item) => item.id !== option.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedCategory } = cartSlice.actions;

export default cartSlice.reducer;
