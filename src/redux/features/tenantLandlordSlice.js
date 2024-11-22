import { createSlice } from '@reduxjs/toolkit';

const tenantLandlordSlice = createSlice({
  name: 'tenantLandlord',
  initialState: {
    tenantDetails: null,
    landlordDetails: null,
  },
  reducers: {
    setTenantDetails: (state, action) => {
      state.tenantDetails = action.payload;
    },
    setLandlordDetails: (state, action) => {
      state.landlordDetails = action.payload;
    },
  },
});

export const { setTenantDetails, setLandlordDetails } = tenantLandlordSlice.actions;

export default tenantLandlordSlice.reducer; // Export only the reducer
