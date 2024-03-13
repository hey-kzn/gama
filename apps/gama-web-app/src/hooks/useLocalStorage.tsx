/**
 * @description Custom hook qui permet d'utiliser le local storage afin de persister des données
 * @param key
 * @param initialValue
 */
export const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };
  const getItem = (key: string) => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else return null;
    } catch (err) {
      console.log(err);
    }
  };
  const removeItem = () => {
    return null;
  };
  return { setItem, getItem, removeItem };
};
