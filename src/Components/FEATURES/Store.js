import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
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