import {setNews} from '../contexts/newsContext'

// base url
const url = 'http://localhost:3030/data';


// get all news from server
export const getAll = () => {
    return fetch(url + '/news').then((res) => res.json()).then(data => setNews(data)).catch(error => console.log(error))
};

// get news details
export const getOne = (newsId) => {
    return fetch(`${url}/pets/${newsId}`).then((res) => res.json());
};
