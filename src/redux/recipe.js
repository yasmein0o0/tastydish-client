import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const recipeThunk = createAsyncThunk(
    "recipe/details",
    async (id, thunkAPI,) => {
        const url = import.meta.env.VITE_APP_SERVER_URL

        try {
            const res = await axios.get(`${url}${id}`);
            console.log(res)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "failed"
            );
        }

    }
)


const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(recipeThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(recipeThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null
        });
        builder.addCase(recipeThunk.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload || action.error.message
        })
    }
})

export default recipeSlice.reducer