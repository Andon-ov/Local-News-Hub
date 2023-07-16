export const fetchNewsData = async () => {
    try {
        // set API parameters
        const params = {
            access_key: "3961b8b72c756118bb8269dbd17cc970",
            languages: "en",
            countries: "bg",
            limit: '10',
            sort: 'published_desc'
        };

        // create query string
        const queryString = new URLSearchParams(params).toString();

        const response = await fetch(
            `http://api.mediastack.com/v1/news?${queryString}`
        );
        const data = await response.json();

        if (response.ok) {
            const articles = data;

            // Iterate through the array and replace the desired text
            for (let i = 0; i < articles.data.length; i++) {

                // Remove non-breaking space
                articles.data[i].title = articles.data[i].title.replace(/&nbsp;/g, ' ');

                // Remove double quotes
                articles.data[i].title = articles.data[i].title.replace(/&quot;/g, '"');

                // Remove any other unwanted characters or tags
                // articles.data[i].title = articles.data[i].title.replace(/<[^>]+>/g, '');
                articles.data[i].title = articles.data[i].title.replace(/&[^;]+;/g, '');
            }

            return articles;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
