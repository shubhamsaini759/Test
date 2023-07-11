import { configureStore } from "@reduxjs/toolkit";

import { PersonalSlice } from "./PersonalSlice";
import { ShippingSlice } from "./ShippingSlice";

export const PersonalSliceActions = PersonalSlice.actions;
export const ShippingSliceActions = ShippingSlice.actions;

export const Store = configureStore({
  reducer: {
    PersonalSliceReducer: PersonalSlice.reducer,
    ShippingSliceReducer: ShippingSlice.reducer,
  },
});
