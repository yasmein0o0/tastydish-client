import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const homeThunk = createAsyncThunk(
    "home",
    async (_, thunkAPI) => {
        const url = import.meta.env.VITE_APP_SERVER_URL
        console.log(url)
        try {
            const res = await axios.get(`${url}home`)
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "failed"
            );
        }

    }
)

const homeSlice = createSlice({
    name: "home",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(homeThunk.pending, (state) => {
            state.loading = true
        })
        builder.addCase(homeThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
            state.error = null
        })
        builder.addCase(homeThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
            state.data = null
        })
    }
})

export default homeSlice.reducer