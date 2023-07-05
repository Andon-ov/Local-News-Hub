import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    // in initial we make nested state wit func and try catch block
    const [state, setState] = useState(() => {
        try {
            // check if item exist
            let item = localStorage.getItem(key);

            // if exist return JSON.parse(item) because in localStorage we save json
            // else return initial value
            return item ? JSON.parse(item) : initialValue;

        } catch (error) {

            // if error return initial value
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        } catch (error) {
            console.log(error);
        }
        // save to state
    };
    return [state, setItem];
};
export default useLocalStorage;