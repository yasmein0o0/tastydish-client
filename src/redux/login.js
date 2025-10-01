import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (userdata, thunkAPI) => {
        const url = import.meta.env.VITE_APP_SERVER_URL
        try {
            const response = await axios.post(`${url}log-in`, {
                email: userdata.email,
                password: userdata.password
            }, {
                withCredentials: true
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "login failed"
            );
        }
    }
)

const loginSlice = createSlice({
    name: "login",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.error = action.payload || action.error.message;
        })
    }
})

export default loginSlice.reducer