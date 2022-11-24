import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_name: '',
  order_id: '',
  enjoy: 0,
  comment: '',
  phone: '',
  email: ''
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUserName: (state, { payload }) => {
      state.user_name = payload;
    },
    setOrderId: (state, { payload }) => {
      state.order_id = payload;
    },
    setEnjoyLvl: (state, { payload }) => {
      state.enjoy = payload;
    },
    setComment: (state, { payload }) => {
      state.comment = payload;
    },
    setPhone: (state, { payload }) => {
      state.phone = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
  }
});

export const {
    setUserName,
    setOrderId,
    setEnjoyLvl,
    setComment,
    setPhone,
    setEmail
} = appSlice.actions;

export default appSlice.reducer;