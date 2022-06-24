import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { accessToken: "", firstName: "" },
  reducers: {
    loginUser(state, action) {
      state.accessToken = action.payload.token;
      state.firstName = action.payload.firstName;
    },
    logoutUser(state) {
      state.accessToken = "";
      state.firstName = "";
    },
  },
});

const { actions, reducer } = userSlice;

export const { loginUser, logoutUser } = actions;
export default reducer;
