import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTourById = createAsyncThunk(
    'tour/info',
    async (tourId, {rejectWithValue} ) => {
        try {
            const response = await axios.get(`https://muha-backender.org.kg/tours/${tourId}/`)
            
            if(response.status !== 200) {
                
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
    tour: {}
}

const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getTourById.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })
        .addCase(getTourById.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            
        })
        .addCase(getTourById.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = ''
            state.tour = action.payload
        })
    }
})

export default tourSlice.reducer


