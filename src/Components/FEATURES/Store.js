import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from './DishesSlice';


export const store = configureStore({
    reducer: {
        dishes: dishesReducer,
    },
});

//Subscribe to the store to log state changes
store.subscribe(() => {
    console.log(store.getState());
});


export default store;