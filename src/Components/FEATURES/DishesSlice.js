import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderedDishes: [],
    isLoading: false,
    isError: '',
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        addDish: (state, action) => {
            state.dishes.push(action.payload);
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        }
    }
});

export const { addDish, setLoading, setError } = dishesSlice.actions;
export default dishesSlice.reducer;