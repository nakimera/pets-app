import { createSlice } from "@reduxjs/toolkit";
import { getPetsToDisplay, getPetTypes } from "../components/organisms/filterPageContainer/helpers";

const initialState = {
    data: [],
    itemsToDisplay: [],
    types: []
}

const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        getPetsAction(state, action) {
            state.data = action?.payload || []
        },
        getTypesAction: (state, action) => {
            state.types = getPetTypes({
                items: state?.data,
            }) || []
        },
        filterPetsAction: (state, action) => {
            state.itemsToDisplay = getPetsToDisplay({
                items: state?.data,
                action: action?.payload?.action,
                value: action?.payload?.value
            }) || []
        }
    },
})

const { reducer, actions } = petsSlice;
export const { getPetsAction, filterPetsAction, getTypesAction } = actions;

export const petsSelector = (state) => state.data;

export default reducer;
