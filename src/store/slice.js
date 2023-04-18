import { createSlice } from "@reduxjs/toolkit";
import { getPetsToDisplay, getPetTypes } from "../components/organisms/filterPageContainer/helpers";

// initial state
export const initialState = {
    error: false,
    loading: false,
    items: [],
    filteredItems: [],
    types: []
};

// our slice
const itemSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
        getPets: (state, { payload }) => {
            state.items = payload;
        },
        setError: (state) => {
            state.error = true;
        },
        getTypes: (state) => {
            state.types = getPetTypes({
                items: state.items,
            })
        },
        filterPets: (state, { payload }) => {
            state.filteredItems = getPetsToDisplay({
                items: state.items,
                action: payload.action,
                value: payload.value
            })
        }
    },
});

// the actions
export const { getPets, setError, getTypes, filterPets } = itemSlice.actions;


// export the selector (".items" being same as in slices/index.js's "items: something")
export const itemsSelector = (state) => state.pets;

// export the default reducer
export default itemSlice.reducer;