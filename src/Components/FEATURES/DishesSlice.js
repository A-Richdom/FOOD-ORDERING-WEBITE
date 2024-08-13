import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { saveStateToLocalStorage, loadStateFromLocalStorage } from './LocalStorageUtility'

// Initialize state
const initialState = loadStateFromLocalStorage() || {
    dishes: [],
    isLoading: false,
    isError: false,
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        addDish: (state, action) => {
            const newDish = { ...action.payload, id: uuidv4() };
            state.dishes = [...state.dishes, newDish];
            saveStateToLocalStorage(state); // Pass the state here
        },
        editDish: (state, action) => {
            const { id, updatedDish } = action.payload;
            const index = state.dishes.findIndex(dish => dish.id === id);
            if (index !== -1) {
                state.dishes[index] = { ...state.dishes[index], ...updatedDish };
                saveStateToLocalStorage(state); // Pass the state here
            }
        },
        deleteDish: (state, action) => {
            const id = action.payload;
            state.dishes = state.dishes.filter(dish => dish.id !== id);
            saveStateToLocalStorage(state); // Pass the state here
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        }
    },
});

export const { addDish, deleteDish, editDish, setLoading, setError } = dishesSlice.actions;
export default dishesSlice.reducer;