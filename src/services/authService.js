// base server url for auth
const baseUrl = 'http://localhost:3030';

// login auth
export const login = async (user) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
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
export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
};

export const register = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
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