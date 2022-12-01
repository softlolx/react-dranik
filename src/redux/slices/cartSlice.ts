import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './../store';

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  typeText: string;
  size: string;
  count: number;
  unitPrice: number;
};

interface CartSliceStateInterface {
  cartItems: CartItemType[];
  totalQty: number;
  totalPrice: number;
}

const initialState: CartSliceStateInterface = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

function thisCartItem(state: CartSliceStateInterface, action: PayloadAction<CartItemType>) {
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
    addCartItem: (state, action: PayloadAction<CartItemType>) => {
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
    plusItem: (state, action: PayloadAction<CartItemType>) => {
      const item: CartItemType | undefined = thisCartItem(state, action);

      item!.count += 1;
      item!.unitPrice += action.payload.price;
      state.totalQty += 1;
      state.totalPrice += action.payload.price;
    },
    minusItem: (state, action: PayloadAction<CartItemType>) => {
      const item: CartItemType | undefined = thisCartItem(state, action);

      item!.count -= 1;
      item!.unitPrice -= action.payload.price;
      state.totalQty -= 1;
      state.totalPrice -= action.payload.price;

      if (item!.count === 0) {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem !== item);
      }
    },
    removeCartItem: (state, action: PayloadAction<CartItemType>) => {
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

export const selectCart = (store: RootState) => store.cart;

export const { addCartItem, plusItem, minusItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
