export interface EventLink {
  name: string;
  tipsportLink: string;
  fortunaLink: string;
}

export interface LoaderEventManagentArgs {
  items: EventLink[];
  isTodayChecked: boolean;
}

export type StorageKey = 'eventLinks' | 'eventLinksFootbal';

export enum LocalStorageEnum {
  localStorageKey = 'eventLinks',
  localStorageKeyFootbal = 'eventLinksFootbal'
}

export const localStorageKey: StorageKey = LocalStorageEnum.localStorageKey;
export const localStorageKeyFootbal: StorageKey = LocalStorageEnum.localStorageKeyFootbal;

export const setLocalStorage = (e: EventLink[], storageKey: StorageKey) => {
  const parsedData = JSON.stringify(e);
  return localStorage.setItem(storageKey, parsedData);
};

export const getLocalStorage = (storageKey: StorageKey): EventLink[] => {
  const data = localStorage.getItem(storageKey);
  if (data && data !== 'undefined') {
    return JSON.parse(data);
  }
  return [];
};

//export const data = getLocalStorage();
