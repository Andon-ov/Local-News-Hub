import {useContext} from 'react';
import {NewsContext} from '../../../contexts/NewsContext';
import HorizontalCard from '../horizontalCard/HorizontalCard';

function Straldja() {
    const {news} = useContext(NewsContext);
    return (news
        // .filter((x) => x.type === 'normal')
        .filter((x) => x.category_name === 'Straldja')
        .map((x) => <HorizontalCard key={x.id} news={x}/>));
}

export default Straldja;
