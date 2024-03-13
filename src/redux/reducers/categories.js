import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoryByID = createAsyncThunk(
    'category/info',
    async (categoryID, { rejectWithValue }) => {

        try {
            const response = await axios.get(`https://muha-backender.org.kg/categories/${categoryID}/`)

            if (response.status !== 200) {
                throw new Error('Server Error')

            }
            return response.data

        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    status: "",
    error: "",
    category: {}
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategoryByID.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })
        .addCase(getCategoryByID.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getCategoryByID.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = ''
            state.category = action.payload
        })
    }
})

export default categorySlice.reducer