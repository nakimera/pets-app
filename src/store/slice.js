import { createSlice } from "@reduxjs/toolkit";
import { getPetsToDisplay } from "../components/organisms/filterPageContainer/filters";

// initial state
export const initialState = {
    error: false,
    loading: false,
    items: [],
    filteredItems: []
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
        filterPets: (state, { payload }) => {
            state.filteredItems = getPetsToDisplay({ items: state.items, action: payload.action, type: payload.type})
        }
    },
});

// the actions
export const { getPets, setError, filterPets } = itemSlice.actions;


// export the selector (".items" being same as in slices/index.js's "items: something")
export const itemsSelector = (state) => state.pets;

// export the default reducer
export default itemSlice.reducer;