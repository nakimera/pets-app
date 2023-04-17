import { createSlice } from "@reduxjs/toolkit";

// initial state
export const initialState = {
    error: false,
    loading: false,
    items: [],
};

// our slice
const itemSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
        getPets: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.items = payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

// the actions
export const { getPets, setError } = itemSlice.actions;


// export the selector (".items" being same as in slices/index.js's "items: something")
export const itemsSelector = (state) => state.pets;

// export the default reducer
export default itemSlice.reducer;