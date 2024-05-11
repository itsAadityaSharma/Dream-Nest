import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  listings: null,
};

export const userSLice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setListings: (state, action) => {
      state.listings = action.payload.listings;
    },
  },
});

export const { setLogin } = userSLice.actions;
export const { setLogout } = userSLice.actions;
export const { setListings } = userSLice.actions;
export default userSLice.reducer;
