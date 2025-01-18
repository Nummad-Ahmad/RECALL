import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
