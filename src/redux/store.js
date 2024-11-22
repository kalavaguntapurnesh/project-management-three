import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./features/userSlice";
import tenantLandlordReducer from "./features/tenantLandlordSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
    tenantLandlord: tenantLandlordReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
