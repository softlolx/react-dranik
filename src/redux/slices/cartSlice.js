import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const findDouble = state.cartItems.find((item) => item.id === action.payload.id);

      if (findDouble) {
        findDouble.count += 1;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalQty += 1;
      state.totalPrice += action.payload.price;
    },
    removeCartItem: (state, action) => {
      state.cartItems.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQty = 0;
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
