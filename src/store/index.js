import { configureStore } from '@reduxjs/toolkit'
import petsSlice from './slice';

const store = configureStore({
  reducer: {
    pets: petsSlice
  }
})

export default store;
