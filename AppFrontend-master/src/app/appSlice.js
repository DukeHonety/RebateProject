import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submissions: [],
  suvaeProfile: {}
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSubmissions: (state, { payload }) => {
      state.submissions = payload;
    },
    setSuvaeProfile: (state, { payload }) => {
      state.suvaeProfile = payload;
    },
  }
});

export const {
  setSubmissions,
  setSuvaeProfile
} = appSlice.actions;

export default appSlice.reducer;