import { openDB } from 'idb';

const DB_NAME = 'foodOrdering';
const STORE_NAME = 'dishes';


export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const saveDish = async (dish) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.objectStore(STORE_NAME).put(dish);
  await tx.done;
};

export const getDishes = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const dishes = await tx.objectStore(STORE_NAME).getAll();
  await tx.done;
  return dishes;
};

export const deleteDish = async (id) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.objectStore(STORE_NAME).delete(id);
  await tx.done;
};
