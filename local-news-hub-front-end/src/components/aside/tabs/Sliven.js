import {useContext} from 'react';
import {NewsContext} from '../../../contexts/NewsContext';
import HorizontalCard from '../horizontalCard/HorizontalCard';

function Sliven() {
    const {news} = useContext(NewsContext);
    return (news
        // .filter((x) => x.type === 'normal')
        .filter((x) => x.category_name === 'Sliven')
        .map((x) => <HorizontalCard key={x.id} news={x}/>));
}

export default Sliven;
