import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
  // We are creating a new database named 'contact_db' which will be using version 1 of the database.
  openDB('contact_db', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('contacts')) {
        console.log('contacts store already exists');
        return;
      }
      // Create a new object store for the data and give it a key name of 'id' which will increment automatically
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      console.log('contacts store created');
    }
  })
}


export const getDB = async () => {
  const db = await openDB('contact_db', 1);
  const tx = db.transaction('contacts', 'readwrite');
  const store = tx.objectStore('contacts');
  return await store.getAll();
}

export const createContact = async (contact) => {
  const db = await openDB('contact_db', 1);
  const tx = db.transaction('contacts', 'readwrite');
  const store = tx.objectStore('contacts');
  return await store.add(contact);
}

// Export a function we will use to POST to the database.
export const postDb = async (name, email, phone, profile) => {
  console.log('POST to the database');

  // Create a connection to the database and specify the version we want to use.
  const contactDb = await openDB('contact_db', 1);

  // Create a new transaction and specify the store and data privileges.
  const tx = contactDb.transaction('contacts', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('contacts');

  // Use the .add() method on the store and pass in the content.
  const request = store.add({ name: name, email: email, phone: phone, profile: profile });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}