import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviewsById = createAsyncThunk(
    'reviews/info',
    async (reviewID, { rejectWithValue }) => {
        try{
            const response = await axios.get(`https://muha-backender.org.kg/tours/${reviewID}/reviews/`)

            if(response.status !== 200 ) {
                throw new Error('Server Error')
            }
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    status: '',
    error: '',
    review: {}
}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducer: {},
    
    extraReducers: (builder) => {
        builder
        .addCase(getReviewsById.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })
        .addCase(getReviewsById.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getReviewsById.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = ''
            state.review = action.payload
        })
    }
})

export default reviewSlice.reducer
