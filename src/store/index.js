import { configureStore } from '@reduxjs/toolkit'
import petsSlice from "./slice";

const store = configureStore({
  reducer: {
    data: petsSlice
  }
})

export default store;
