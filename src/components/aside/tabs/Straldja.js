import { useContext } from 'react';
import { NewsContext } from '../../../contexts/NewsContext';
import HorizontalCard from '../HorizontalCard';


function Straldja() {
    const { news } = useContext(NewsContext);
    return news
        // .filter((x) => x.type === 'normal')
        .filter((x) => x.category === 'Straldja')
        .map((x) => (
            <HorizontalCard key={x._id} news={x} />
        ));
}
export default Straldja;