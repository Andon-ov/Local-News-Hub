

export const fetchNewsData = async () => {
    try {
        // const apiKey = '8c33626b33904f78b606d4845b788530';
        const apiKey = 'af704c227c1441ed9fce221636a57117';
        const news = 14;
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=bg&apiKey=${apiKey}&pageSize=${news}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const articles = data.articles;
            return articles;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
