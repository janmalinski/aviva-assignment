import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, text: string) => {
    try {
      await AsyncStorage.setItem(key, text)
    } catch (e) {
      console.warn('ASYNC_STORAGE_STORE_ERROR', e)
    }
  };

 export const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value;
      }
    } catch(e) {
      console.warn('ASYNC_STORAGE_GET_ERROR', e)
    }
  };

 export const removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.warn('ASYNC_STORAGE_REMOVE_ERROR', e)
    }
  };