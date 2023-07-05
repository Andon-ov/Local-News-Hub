// base server url for auth
const baseUrl = 'http://localhost:8000/auth';

// login auth
export const login = async (user) => {
    let res = await fetch(`${baseUrl}/login/`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(user),
    });

    if (!res.ok) {
        
        // if response is !ok -> throw error
        let error = await res.json();
        throw error;

    } else {

        // if response is ok -> go forward and return data
        let authData = await res.json();
        return authData;
    }
};

// logout
export const logout = async (token) => {

    let res = await fetch(`${baseUrl}/logout/`, {
        method: 'GET', headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    });
    return res;

};

export const register = async (username, password) => {
    let res = await fetch(`${baseUrl}/register/`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {

        // if response is !ok -> throw error
        let error = await res.json();
        throw error;

    } else {

        // if response is ok -> go forward and return data
        let authData = await res.json();
        return authData;
    }
};