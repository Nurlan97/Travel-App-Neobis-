import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postBookings = createAsyncThunk(
    'postBookings',
    async (data) => {
        try {
            const response = await axios.post('https://muha-backender.org.kg/tours/3/reservations', data)
            
            if (response.status === 200) {
                return response.data
            } else {
                throw new Error('Server Error')
            }
        } catch (error) {
            console.log(error.message)

        }
    }
)

const initialState = {
    status: 'empty',
    error: '',
    // data: null
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(postBookings.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(postBookings.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(postBookings.fulfilled, (state) => {
                state.status = 'fulfilled'
                state.error = ''
                // state.data = action.payload
            })
    }
})

// export const {} = bookingSlice.actions
export default bookingSlice.reducer