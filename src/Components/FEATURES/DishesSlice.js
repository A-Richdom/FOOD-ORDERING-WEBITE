import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { saveStateToLocalStorage, loadStateFromLocalStorage } from './LocalStorageUtility'

// Initialize state
const initialState = loadStateFromLocalStorage() || {
    dishes : [
        {
            customer: 'Harry Richdom01',
            imgSrc: 'DishImages/img1.png',
            name: 'Salted Pesta Seasoningg',
            price: '$3.42',
            unitAvailable: '20 Bowls Available',
            quantity: '3',
            totalPrice: '$10.26',
        },
        {
            customer: 'Harry Richdom02',
            imgSrc: 'DishImages/img2.png',
            name: 'Ice creem sandwich',
            price: '$1.06',
            unitAvailable: '10 Bowls Available',
            quantity: '6',
            totalPrice: '$20.56',
        },
        {
            customer: 'Harry Richdom03',
            imgSrc: 'DishImages/img3.png',
            name: 'Spicy Instant Noodles',
            price: '$1.33',
            unitAvailable: '5 Bowls Available',
            quantity: '9',
            totalPrice: '$105.50',
        },
        {
            customer: 'Harry Richdom04',
            imgSrc: 'DishImages/img4.png',
            name: 'Fresh Youghout',
            price: '$3.33',
            unitAvailable: '4 Bowls Available',
            quantity: '2',
            totalPrice: '$20.89',
        },
        {
            customer: 'Harry Richdom05',
            imgSrc: 'DishImages/img4.png',
            name: 'Salted pasta with asorted meat',
            price: '$2.33',
            unitAvailable: '15 Bowls Available',
            quantity: '35',
            totalPrice: '$70.00',
        },
        {
            customer: 'Harry Richdom06',
            imgSrc: 'DishImages/img5.png',
            name: 'Instant Noodles with egg',
            price: '$10.33',
            unitAvailable: '10 Bowls Available',
            quantity: '1',
            totalPrice: '$10.56',
        },
        {
            customer: 'Harry Richdom07',
            imgSrc: 'DishImages/img6.png',
            name: 'Salted Pasta Seasooning',
            price: '$3.42',
            unitAvailable: '20 Bowls Available',
            quantity: '120',
            totalPrice: '$490.45',
        },
    ],
    selectedDishes: [],
    isVisible: false,
    isLoading: false,
    isError: false,

};


const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        addDish: (state, action) => {
            const newDish = { ...action.payload, id: uuidv4(), unitAvailable: action.payload.unitAvailable || 10 };
            state.dishes = [...state.dishes, newDish];
            saveStateToLocalStorage(state); // Pass the state here.
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
        selectDish: (state, action) => {
            console.log('selectDish reducer called with payload', action.payload);
            
            console.log('Dish ID:', action.payload.id);

            const dishIndex = state.dishes.findIndex(dish => dish.id === action.payload.id);
            console.log('Dish Index:', dishIndex);

            if (dishIndex !== -1 && state.dishes[dishIndex].unitAvailable > 0) {
                console.log('Before Reducing Units:', state.dishes[dishIndex].unitAvailable);

                state.dishes[dishIndex].unitAvailable -= 1;

                console.log('After Reducing Units:', state.dishes[dishIndex].unitAvailable);

                state.selectedDishes.push(state.dishes[dishIndex]);

                saveStateToLocalStorage(state);
            } else {
                console.log('No more units available for this dish');
            }

            // const dish = action.payload;
            // if (!state.selectedDishes) {
            //     state.selectedDishes = []; 
            // } 
            // state.selectedDishes.push(dish);
            // saveStateToLocalStorage(state);
        },
        deSelectDish: (state, action) => {
            const id = action.payload;
            state.selectedDishes = state.selectedDishes.filter(dish => dish.id !== id);
            saveStateToLocalStorage(state);
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        }
    },
});

export const { addDish, deleteDish, editDish, selectDish, deSelectDish, setLoading, setError } = dishesSlice.actions;
export default dishesSlice.reducer;