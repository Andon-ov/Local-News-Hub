import Card from './Card';

import { useContext } from 'react';
import { NewsContext } from '../../contexts/NewsContext';

function Cards() {
  const { news } = useContext(NewsContext);

  return (
    <section className="cards">
      {news.map((item) => (
        <Card key={item._id} news={item} />
        // <div key={item._id}>{item.title}</div>
      ))}
    </section>
  );
}

export default Cards;
