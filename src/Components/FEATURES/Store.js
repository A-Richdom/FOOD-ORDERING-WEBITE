import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from './DishesSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //default to local storage for web


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, dishesReducer);

export const store = configureStore({
    reducer: {
        dishes: persistedReducer,
    },
});

export const persistor = persistStore(store);


//Subscribe to the store to log state changes
store.subscribe(() => {
    console.log(store.getState());
});

export default store;