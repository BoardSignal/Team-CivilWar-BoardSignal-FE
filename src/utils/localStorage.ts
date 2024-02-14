export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const valueString = localStorage.getItem(key);
    const value: T =
      valueString !== null ? JSON.parse(valueString) : defaultValue;

    return value;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

export const setLocalStorage = (key: string, value: unknown) => {
  try {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
  } catch (error) {
    console.error(error);
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
