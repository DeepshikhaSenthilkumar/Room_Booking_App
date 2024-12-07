import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './roomSlice.jsx'

export const appStore = configureStore({
  reducer: {
    rooms: roomReducer,
  },
})
