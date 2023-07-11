import { createSlice } from "@reduxjs/toolkit";

export const ShippingSlice = createSlice({
  name: "personal",
  initialState: {
    Address: "",
    City: "",
    Postal: "",
  },
  reducers: {
    Address(state, { payload }) {
      state.Address = payload.add;
    },

    City(state, { payload }) {
      state.City = payload.city;
    },
    Postal(state, { payload }) {
      state.Postal = payload.post;
    },
  },
});
