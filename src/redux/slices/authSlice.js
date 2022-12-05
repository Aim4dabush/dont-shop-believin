import { createSlice } from "@reduxjs/toolkit";

const idToken = localStorage.getItem("token");
const userId = localStorage.getItem("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: userId ? userId : null,
      token: idToken ? idToken : null,
      expiration: null,
    },
  },
  reducers: {
    setReset(state) {
      state.user = {
        id: null,
        token: null,
      };
    },
    setUser(state, action) {
      state.user = {
        id: action.payload,
        token: action.payload.token,
        expiration: 3600000,
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
