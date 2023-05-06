import {useContext} from 'react';
import {NewsContext} from '../../contexts/NewsContext';
import HorizontalCard from './HorizontalCard';

const Aside = () => {
    const {news} = useContext(NewsContext);
    return (
        <aside className="aside">
            <h1>HorizontalCard</h1>
            {news
                .filter((x) => x.type === 'normal')
                .map((x) => (
                    <HorizontalCard key={x._id} news={x}/>
                ))}
        </aside>
    );
};
export default Aside;


