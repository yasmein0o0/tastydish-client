import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signupThunk = createAsyncThunk(
    'auth/signup',
    async (userdata) => {
        const url = import.meta.env.VITE_API_URL

        const response = await axios.post(`${url}login`, {
            name: userdata.name,
            email: userdata.email,
            password: userdata.password,
        }, {
            withCredentials: true
        })

        return response.data
    }
)

const signupSlice = createSlice(
    {
        name: 'signup',
        initialState: {
            loading: false,
            error: null,
            data: null
        },
        extraReducers: (builder) => {
            builder.addCase(signupThunk.pending, (state) => {
                state.loading = true
            })
            builder.addCase(signupThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            builder.addCase(signupThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
        }
    }
)

export default signupSlice.reducer 
