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
    setTripList: (state, action) => {
      state.user.tripList = action.payload;
    },
    setWishList: (state, action) => {
      state.user.wishList = action.payload;
    },
    setProperties: (state, action) => {
      state.user.propertyList = action.payload;
    },
    setReservationList: (state, action) => {
      state.user.reservationList = action.payload;
    },
  },
});

export const { setLogin } = userSLice.actions;
export const { setLogout } = userSLice.actions;
export const { setListings } = userSLice.actions;
export const { setTripList } = userSLice.actions;
export const { setWishList } = userSLice.actions;
export const { setProperties } = userSLice.actions;
export const { setReservationList } = userSLice.actions;
export default userSLice.reducer;
