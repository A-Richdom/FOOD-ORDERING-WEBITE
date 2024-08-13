export const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('dishesState', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('dishesState');
        if (serializedState === null) {
            return undefined; // Return undefined if no state is found
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return undefined;
    }
}