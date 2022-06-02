import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.fruits = [...state.fruits, action.payload];
      state.amount += 1;
    },
    removeItem: (state, action) => {
      const nextCartFruits = state.fruits.filter(
        (fruit) => fruit.cartId !== action.payload.cartId
      );
      state.fruits = nextCartFruits;
      // console.log(nextCartFruits);
      state.amount -= 1;
    },
  },
});

console.log(cartSlice);

export const { addItem, removeItem } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
