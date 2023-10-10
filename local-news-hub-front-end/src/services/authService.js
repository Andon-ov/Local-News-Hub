// base server url for auth
const baseUrl = "http://localhost:8000/auth";

const loginUrl = `${baseUrl}/login/`;
const logoutUrl = `${baseUrl}/logout/`;
const registerUrl = `${baseUrl}/register/`;

export const login = async (user) => {
  let res = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return handleResponse(res);
};

export const logout = async (token) => {
  let res = await fetch(logoutUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const register = async (username, password) => {
  let res = await fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return handleResponse(res);
};

async function handleResponse(res) {
  if (!res.ok) {
    // if response is !ok -> throw error
    let error = await res.json();
    throw error;
  } else {
    // if response is ok -> go forward and return data
    let authData = await res.json();
    return authData;
  }
}
