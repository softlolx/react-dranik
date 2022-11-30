import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

function thisCartItem(state, action) {
  return state.cartItems.find(
    (item) =>
      item.id === action.payload.id &&
      item.type === action.payload.type &&
      item.size === action.payload.size
  );
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const findDouble = thisCartItem(state, action);

      if (findDouble) {
        findDouble.count += 1;
        findDouble.unitPrice += action.payload.price;
      } else {
        state.cartItems.push({ ...action.payload, count: 1, unitPrice: action.payload.price });
      }
      state.totalQty += 1;
      state.totalPrice += action.payload.price;
    },
    plusItem: (state, action) => {
      const item = thisCartItem(state, action);

      item.count += 1;
      item.unitPrice += action.payload.price;
      state.totalQty += 1;
      state.totalPrice += action.payload.price;
    },
    minusItem: (state, action) => {
      const item = thisCartItem(state, action);

      item.count -= 1;
      item.unitPrice -= action.payload.price;
      state.totalQty -= 1;
      state.totalPrice -= action.payload.price;

      if (item.count === 0) {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem !== item);
      }
    },
    removeCartItem: (state, action) => {
      const item = thisCartItem(state, action);

      state.cartItems = state.cartItems.filter((cartItem) => cartItem !== item);
      state.totalQty -= action.payload.count;
      state.totalPrice -= action.payload.unitPrice;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQty = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cart;

export const { addCartItem, plusItem, minusItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
