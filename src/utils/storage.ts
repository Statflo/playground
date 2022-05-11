import { v4 as uuid } from "uuid";
import { StorageState } from "../types";

const storageKey = 'textkitPlaygroundConfig';

export function getStorageItem(key: keyof StorageState) {
    const storage = getStorage();
    return storage[key];
}

export function getStorage(): StorageState {
    const storage = localStorage.getItem(storageKey);
    const envId = uuid();

    const defaultState: StorageState = {
        env: {
            [envId]: {
                id: envId,
                name: 'Default'
            }
        },
        widget: {},
        contact: {}
    }

    if (storage) {
        return JSON.parse(storage);
    } else {
        localStorage.setItem(storageKey, JSON.stringify(defaultState));
        return defaultState;
    }
}

export function saveStorageItem(key: keyof StorageState, value: any) {
    const storage = getStorage();
    storage[key] = value;
    localStorage.setItem(storageKey, JSON.stringify(storage));
}
