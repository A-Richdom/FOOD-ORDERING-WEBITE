import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from './DishesSlice';


export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
  },
});
