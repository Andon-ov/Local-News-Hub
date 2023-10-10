import { useState } from "react";

/**
 * Custom hook for managing state in local storage.
 *
 * @param {string} key - The key under which the data is stored in local storage.
 * @param {any} initialValue - The initial value to use if the data is not found in local storage.
 * @returns {Array} - An array containing the state and a function to set the state.
 */
const useLocalStorage = (key, initialValue) => {
  // Initialize state using a function to handle local storage retrieval and error handling
  const [state, setState] = useState(() => {
    try {
      // Attempt to retrieve an item from local storage using the provided key
      let item = localStorage.getItem(key);

      // If the item exists in local storage, parse it as JSON and return it as the initial state
      // If the item doesn't exist, return the provided initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If an error occurs during local storage access, return the provided initialValue
      return initialValue;
    }
  });

  // Function to set the state and save it to local storage
  const setItem = (value) => {
    try {
      // Save the value to local storage as a JSON string
      localStorage.setItem(key, JSON.stringify(value));

      // Update the state with the new value
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  // Return an array containing the state and the setItem function
  return [state, setItem];
};

export default useLocalStorage;
