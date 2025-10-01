import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const searchThunk = createAsyncThunk(
    "searc/submit",
    async (query, thunkAPI) => {
        const url = import.meta.env.VITE_APP_SERVER_URL
        try {
            const response = await axios.post(`${url}search`,
                {},
                {
                    params: {
                        dish: query,
                    }
                })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "failed"
            );
        }
    }
)
// redux/searchSlice.js

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: null,
        loading: false,
        error: null,
        currentPage: 1,
        itemsPerPage: 6,
        searchQuery: ''
    },
    reducers: {
        // Add reducers for page management
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(searchThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { setCurrentPage } = searchSlice.actions;
export default searchSlice.reducer