import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      token: null,
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
        id: action.payload.id,
        token: action.payload.token,
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
