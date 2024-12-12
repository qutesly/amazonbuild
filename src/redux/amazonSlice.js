import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    // ========== Products Reducer Starts here ==========
    // Add item to Cart
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    // Delete item from Cart
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    // Reset Cart to initial state
    resetCart: (state) => {
      state.products = [];
    },
    // ========= Product Reducer Ends here ==========
    // ========= UserInfo Reducer Starts here ===============

    // user authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    userSignout: (state) => {
      state.userInfo = null;
    },
    // ========= UserInfo Ends here ===============
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  setUserInfo,
  userSignout,
} = amazonSlice.actions;
export default amazonSlice.reducer;
