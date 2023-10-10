import Card from "./VerticalCard";
import "./Cards.css";
import { useContext } from "react";
import { NewsContext } from "../../../contexts/NewsContext";
import { useNewsLoader } from "../../../hooks/useNewsLoader";

function Cards() {
  // Access the news data from the NewsContext
  const { news } = useContext(NewsContext);

  // Define initial load count and products per load
  const initialLoadCount = 10;
  const productsPerLoad = 10;

  // Use the custom hook "useNewsLoader" to manage news loading
  const { handleLoadMoreClick, displayedNews } = useNewsLoader(
    initialLoadCount,
    productsPerLoad,
    news
  );

  return (
    <>
      <section className="cards">
        {displayedNews.map((item) => (
          <Card key={item.id} news={item} />
        ))}
      </section>

      {/* "Load More" button */}
      <div className="products__button">
        {displayedNews.length < news.length && (
          <button className="loadMoreBtn" onClick={handleLoadMoreClick}>
            {/* eng */}
            {/* Load More */}
            {/* bg */}
            Зареди още новини
          </button>
        )}
      </div>
    </>
  );
}

export default Cards;
