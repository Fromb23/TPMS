import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import studentReducer from './slices/studentSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
  },   
})

export default store;