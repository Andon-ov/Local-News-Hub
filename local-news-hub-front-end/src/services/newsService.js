// base url
// const url = 'http://localhost:3030/data';

const baseUrl = "http://localhost:8000";

export const getAll = () => {
  return fetch(baseUrl + "/news/").then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    return res.json();
  });
};

export const getOne = (newsId) => {
  return fetch(`${baseUrl}/news/${newsId}/`).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    return res.json();
  });
};
