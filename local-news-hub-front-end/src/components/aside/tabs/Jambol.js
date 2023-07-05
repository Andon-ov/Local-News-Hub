import {useContext} from 'react';
import {NewsContext} from '../../../contexts/NewsContext';
import HorizontalCard from '../horizontalCard/HorizontalCard';


function Jambol() {
    const {news} = useContext(NewsContext);
    return news
        .filter((x) => x.category_name === 'Jambol')
        .map((x) => (
            <HorizontalCard key={x.id} news={x}/>
        ));
}

export default Jambol;