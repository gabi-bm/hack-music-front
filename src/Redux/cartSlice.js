import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        console.log("Dentro del reducer");
        const addedProduct = state.items.find(
          (cartItem) => cartItem.product._id === action.payload.addedItem.product._id,
        );

        addedProduct ? (addedProduct.quantity += 1) : state.items.push(action.payload.addedItem);
        state.totalQuantity += 1;
        state.totalPrice += action.payload.addedItem.product.price;
      },
      prepare: ({ product }) => {
        console.log("Dentro del prepare");
        const quantity = 1;
        return { payload: { addedItem: { product, quantity } } };
      },
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProduct } = actions;
export default reducer;
