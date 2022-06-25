import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], quantity: 0, total: 0 },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload.product);
      state.quantity += 1;
      state.total += action.payload.product.price;
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProduct } = actions;
export default reducer;
