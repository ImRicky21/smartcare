/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../config/global-config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_AUTH } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_AUTH, { keyPath: 'key' });
  },
});

const LocalStorage = {
  async putAccount(account) {
    if (!account.hasOwnProperty('key')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME_AUTH, account);
  },

  async getAccount(key) {
    return (await dbPromise).get(OBJECT_STORE_NAME_AUTH, key);
  },
  async deleteAccount(key) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_AUTH, key);
  },
};

export default LocalStorage;
