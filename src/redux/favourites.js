// favouritesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAxios } from '../utils/api';

// Add to favourites - SIMPLE VERSION
export const addToFavouritesThunk = createAsyncThunk(
    'favourites/add',
    async (dishId, { rejectWithValue }) => {
        try {
            console.log(dishId)
            const response = await authAxios.post('add-to-favourites', { dishId });
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to add to favourites'
            );
        }
    }
);

// Get all favourites - SIMPLE VERSION
export const getFavouritesThunk = createAsyncThunk(
    'favourites/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await authAxios.post('get-favourites');
            console.log(response)
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to get favourites'
            );
        }
    }
);

// Remove from favourites - SIMPLE VERSION
export const removeFromFavouritesThunk = createAsyncThunk(
    'favourites/remove',
    async (dishId, { rejectWithValue }) => {
        try {
            const response = await authAxios.post(`delete-from-favourites`, { dishId });
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to remove from favourites'
            );
        }
    }
);

// REST OF YOUR FILE STAYS EXACTLY THE SAME!
const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        items: [],
        loading: false,
        error: null,
        lastAction: null
    },
    reducers: {
        clearFavouritesError: (state) => {
            state.error = null;
        },
        resetLastAction: (state) => {
            state.lastAction = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Add to favourites
            .addCase(addToFavouritesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToFavouritesThunk.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                if (!state.items.includes(`${action.payload.favourite.dish_id}`)) {
                    state.items.push(action.payload.favourite);
                }
                state.lastAction = { type: 'add' };
            })
            .addCase(addToFavouritesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get all favourites
            .addCase(getFavouritesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFavouritesThunk.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false;
                state.items = action.payload.favourites || [];
            })
            .addCase(getFavouritesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Remove from favourites
            .addCase(removeFromFavouritesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromFavouritesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(id => `${id}` !== action.payload.removed.dish_id);
                state.lastAction = { type: 'remove' };
            })
            .addCase(removeFromFavouritesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearFavouritesError, resetLastAction } = favouritesSlice.actions;
export default favouritesSlice.reducer;