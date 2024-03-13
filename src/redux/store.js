import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './reducers/bookings'
import tourSlice from './reducers/tour'
import categorySlice from './reducers/categories'
import reviewSlice from './reducers/reviews'


export const store = configureStore({
  reducer: {
    bookingSlice,
    tourSlice,
    categorySlice,
    reviewSlice
    
  },
})