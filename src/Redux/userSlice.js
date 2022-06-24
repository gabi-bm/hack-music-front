import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    loginUser(state, action) {
      state.token = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { loginUser } = actions;
export default reducer;
