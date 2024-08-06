import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: [
            {
                id: 0,
                imgSrc: 'DishImages/img1.png',
                name: 'Salted Pesta Seasoningg',
                price: '$3.42',
                unitAvailable: '20 Bowls Available',
                quantity: '3',
                totalPrice: '$10.26',
            },
            {
                id: 1,
                imgSrc: 'DishImages/img2.png',
                name: 'Ice creem sandwich',
                price: '$1.06',
                unitAvailable: '10 Bowls Available',
                quantity: '6',
                totalPrice: '$20.56',
            },
            {
                id: 2,
                imgSrc: 'DishImages/img3.png',
                name: 'Spicy Instant Noodles',
                price: '$1.33',
                unitAvailable: '5 Bowls Available',
                quantity: '9',
                totalPrice: '$105.50',
            },
            {
                id: 3,
                imgSrc: 'DishImages/img4.png',
                name: 'Fresh Youghout',
                price: '$3.33',
                unitAvailable: '4 Bowls Available',
                quantity: '2',
                totalPrice: '$20.89',
            },
            {
                id: 4,
                imgSrc: 'DishImages/img5.png',
                name: 'Salted pasta with asorted meat',
                price: '$2.33',
                unitAvailable: '15 Bowls Available',
                quantity: '35',
                totalPrice: '$70.00',
            },
            {
                id: 5,
                imgSrc: 'DishImages/img6.png',
                name: 'Instant Noodles with egg',
                price: '$10.33',
                unitAvailable: '10 Bowls Available',
                quantity: '1',
                totalPrice: '$10.56',
            },
            {
                id: 6,
                imgSrc: 'DishImages/img1.png',
                name: 'Salted Pasta Seasooning',
                price: '$3.42',
                unitAvailable: '20 Bowls Available',
                quantity: '120',
                totalPrice: '$490.45',
            },
            {
                id: 7,
                imgSrc: 'DishImages/img2.png',
                name: 'Ice cream sandwich',
                price: '$1.06',
                unitAvailable: '3 Bowls Available',
                quantity: '3',
                totalPrice: '$23.11',
            },
            {
                id: 8,
                imgSrc: 'DishImages/img3.png',
                name: 'Spicy Instant Noodles',
                price: '$1.33',
                unitAvailable: '10 Bowls Available',
                quantity: '25',
                totalPrice: '$24.33',
            },
            {
                id: 9,
                imgSrc: 'DishImages/img4.png',
                name: 'Fresh Yooughout',
                price: '$3.33',
                unitAvailable: '20 Bowl Available',
                quantity: '3',
                totalPrice: '$10.11',
            },
            {
                id: 10,
                imgSrc: 'DishImages/img5.png',
                name: 'Salted pasta with assorted fish',
                price: '$2.33',
                unitAvailable: '20 Bowl Available',
                quantity: '10',
                totalPrice: '$4.76',
            },
            {
                id: 11,
                imgSrc: 'DishImages/img5.png',
                name: 'Salted pastaa with assorted meat',
                price: '$2.33',
                unitAvailable: '15 Bowls Available',
                quantity: '11',
                totalPrice: '$22.33',
            },
    ],
    isLoading: false,
    isError: '',
};


const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        addDish: (state, action) => {
            console.log('Adding Dish:', action.payload); //log adding dish 
            state.dishes = [...state.dishes, action.payload];
            console.log("New state after adding dish:", state.dishes); // Log new state
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        }
    },
});

export const { addDish, setLoading, setError } = dishesSlice.actions;
export default dishesSlice.reducer;