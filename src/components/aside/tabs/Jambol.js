import {useContext} from 'react';
import {NewsContext} from '../../../contexts/NewsContext';
import HorizontalCard from '../HorizontalCard';



function Jambol() {
    const {news} = useContext(NewsContext);
    return news
        .filter((x) => x.category === 'Jambol')
        .map((x) => (
            <HorizontalCard key={x._id} news={x}/>
        ));
}

export default Jambol;