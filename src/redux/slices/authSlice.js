import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      token: null,
      isAuth: false,
    },
  },
  reducers: {
    setReset(state) {
      state.user = {
        id: null,
        token: null,
        isAuth: false,
      };
    },
    setUser(state, action) {
      state.user = {
        id: action.payload.id,
        token: action.payload.token,
        isAuth: action.payload.isAuth,
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
