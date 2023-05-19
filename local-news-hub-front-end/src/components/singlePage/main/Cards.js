import Card from './VerticalCard';
import './Cards.css';

import {useContext} from 'react';
import {NewsContext} from '../../../contexts/NewsContext';

function Cards() {
    const {news} = useContext(NewsContext);

    return (<section className="cards">
            {news.map((item) => (<Card key={item.id} news={item}/>))}
        </section>);
}

export default Cards;
