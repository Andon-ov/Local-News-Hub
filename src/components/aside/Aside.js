import {useContext} from 'react';
import {NewsContext} from '../../contexts/NewsContext';
import HorizontalCard from './HorizontalCard';
import Tabs from './Tabs';
import Weather from './Weather';

const Aside = () => {
    const {news} = useContext(NewsContext);
    return (
        <aside className="aside">
            <Tabs/>
            {news
                .filter((x) => x.type === 'normal')
                .map((x) => (
                    <HorizontalCard key={x._id} news={x}/>
                ))}
                <Weather/>
        </aside>
    );
};
export default Aside;


