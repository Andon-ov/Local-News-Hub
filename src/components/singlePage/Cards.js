import Card from './Card';
import {useEffect, useState} from 'react';
// import { useContext } from 'react';
// import { NewsContext } from '../../contexts/newsContext';


function Cards() {
//   const { news, setNews } = useContext(NewsContext);

    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3030/data/news')
            .then((res) => res.json())
            .then((news) => setNews(news))
            .catch((error) => console.log(error));
    }, []);
    return (
        <section className="cards">
            {news.map((item) => (
                <Card key={item._id} news={item}/>
                // <div key={item._id}>{item.title}</div>
            ))}
        </section>
    );
}

export default Cards;
