import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submissions: [],
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSubmissions: (state, { payload }) => {
      state.submissions = payload;
    },
  }
});

export const {
  setSubmissions
} = appSlice.actions;

export default appSlice.reducer;