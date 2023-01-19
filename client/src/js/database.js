// TODO: Install the following package:
import { openDB } from 'idb';

const dbName = 'contacts-db'
const storeName = 'contacts'

// TODO: Complete the initDb() function below:
const initdb = async () => {
    await openDB(dbName, 1, {
        upgrade(db) {
            db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true })
        }
    })
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    const db = await openDB(dbName, 1)
    const tx = db.transaction(storeName, "readwrite")
    const store = tx.objectStore(storeName)
    // mutate the store
    await store.add({
        name,
        home_phone: home,
        cell_phone: cell,
        email,
    })
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    const db = await openDB(dbName, 1)
    const tx = db.transaction(storeName, "readwrite")
    const store = tx.objectStore(storeName)
    return await store.getAll()
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    const db = await openDB(dbName, 1)
    const tx = db.transaction(storeName, "readwrite")
    const store = tx.objectStore(storeName)
    await store.delete(id)
};

initdb();
