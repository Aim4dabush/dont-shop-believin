import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      token: null,
    },
    isAuth: false,
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
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
