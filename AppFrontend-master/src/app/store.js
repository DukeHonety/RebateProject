import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appSlice';
// export const store = configureStore({
//   reducer: {
//     auth: authReducer, app: appReducer 
//   },
// });

export const store = configureStore({
  reducer: {
    app: appSliceReducer
  },
});