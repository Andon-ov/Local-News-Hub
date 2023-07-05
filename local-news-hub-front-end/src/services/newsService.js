// base url
// const url = 'http://localhost:3030/data';
const url = 'http://localhost:8000/';


// get all news from server

export const getAll = () => {
    return fetch(url + '/news/')
        .then((res) => res.json());
};


// get news details
export const getOne = (newsId) => {
    return fetch(`${url}/news/${newsId}/`)
        .then((res) => res.json());
};
