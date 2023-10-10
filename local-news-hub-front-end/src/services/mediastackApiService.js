const API_BASE_URL = "http://api.mediastack.com/v1/news";
const API_KEY = "3961b8b72c756118bb8269dbd17cc970";

export const fetchNewsData = async () => {
  try {
    // set API parameters
    const params = {
      access_key: API_KEY,
      languages: "en",
      countries: "bg",
      limit: "17",
      sort: "published_desc",
    };
    // create query string
    const queryString = new URLSearchParams(params).toString();

    const response = await fetch(`${API_BASE_URL}?${queryString}`);
    const data = await response.json();

    if (response.ok) {
      return processArticle(data);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

function processArticle(data) {
  const articles = data;

  // Iterate through the array and replace unwanted characters
  for (let i = 0; i < articles.data.length; i++) {
    articles.data[i].title = articles.data[i].title.replace(/&[^;]+;/g, "");
  }

  return articles;
}
