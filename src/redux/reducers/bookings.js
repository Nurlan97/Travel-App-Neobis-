import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postBookings = createAsyncThunk(
    'postBookings',
    async (data, {rejectWithValue}) => {
        try {
            // const response = await axios.post('https://muha-backender.org.kg/tours/3/reservations/', data)
            const response = await axios.post(`https://muha-backender.org.kg/tours/${data.id}/reserve/`, data)
            
            console.log(response)
            if (response.status === 201) {
                return response.data
            } else {
                throw new Error('Server Error')
            }
        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.response.data)
            
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