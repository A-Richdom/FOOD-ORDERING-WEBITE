import { createStore } from 'react-redux';

const { createStore } = Redux;

const initState = {
    todos: [],
    posts: []
};

function myReducer(state = initState, action) {
    console.log(action, state);
};

const store = createStore(myReducer);

const todoAction = { type: 'ADD_TODO', todo: 'buy milk'};

store.dispatch(todoAction)