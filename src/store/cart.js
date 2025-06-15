import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalPrice = action.payload.totalPrice || 0;
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.changed = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity = state.items.reduce(
        (accm, curr) => accm + curr.quantity,
        0
      );

      state.totalPrice = state.items.reduce(
        (accm, curr) => accm + curr.totalPrice,
        0
      );

      state.changed = true;
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      state.totalQuantity = state.items.reduce(
        (accm, curr) => accm + curr.quantity,
        0
      );

      state.totalPrice = state.items.reduce(
        (accm, curr) => accm + curr.totalPrice,
        0
      );
      state.changed = true;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.changed = true;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
