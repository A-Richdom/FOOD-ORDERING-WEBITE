// IndexDB.js
import { openDB } from 'idb';

const dbPromise = openDB('dish-store', 1, {
    upgrade(db) {
        db.createObjectStore('dishes', { keyPath: 'id', autoIncrement: true });
    },
});

export const saveDish = async (dish) => {
    const db = await dbPromise;
    await db.put('dishes', dish);
};

export const getDishes = async () => {
    const db = await dbPromise;
    return db.getAll('dishes');
};

export const clearDishes = async () => {
    const db = await dbPromise;
    await db.clear('dishes');
};
