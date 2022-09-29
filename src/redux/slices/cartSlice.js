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
      state.totalQty++;
      state.totalPrice += option.payload.price;
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
export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;