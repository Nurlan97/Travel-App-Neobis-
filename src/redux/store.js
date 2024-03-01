import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './reducers/bookings'

export const store = configureStore({
  reducer: {
    bookingSlice
  },
})