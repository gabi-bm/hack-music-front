import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        const addedItem = state.items.find(
          (cartItem) => cartItem.product._id === action.payload.addedItem.product._id,
        );

        addedItem ? (addedItem.quantity += 1) : state.items.push(action.payload.addedItem);
        state.totalQuantity += 1;
        state.totalPrice += action.payload.addedItem.product.price;
      },
      prepare: ({ product }) => {
        const quantity = 1;
        return { payload: { addedItem: { product, quantity } } };
      },
    },
    deleteProduct(state, action) {
      const deletedItem = state.items.find(
        (cartItem) => cartItem.product._id === action.payload.deletedItem.product._id,
      );

      if (deletedItem.quantity > 1) {
        deletedItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (cartItem) => cartItem.product._id !== deletedItem.product._id,
        );
      }

      state.totalQuantity <= 0 ? (state.totalQuantity = 0) : (state.totalQuantity -= 1);
      state.totalPrice -= action.payload.deletedItem.product.price;
    },
    deleteCartItem(state, action) {
      const quantity = action.payload.deletedItem.quantity;
      const price = action.payload.deletedItem.product.price;
      state.totalQuantity -= quantity;
      state.totalPrice -= quantity * price;

      state.items = state.items.filter(
        (cartItem) => cartItem.product._id !== action.payload.deletedItem.product._id,
      );
    },
    resetCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProduct, deleteProduct, deleteCartItem, resetCart } = actions;
export default reducer;
