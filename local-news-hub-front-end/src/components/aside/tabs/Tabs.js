import React, {useState} from 'react';
import Straldja from './Straldja';
import NewsComponent from './NewsComponent';
import Sliven from './Sliven';
import './Tabs.css';

const Tabs = () => {
    const [activeElement, setActiveElement] = useState('Straldja');

    const toggleElement = (element) => {
        setActiveElement(element);
    };

    return (
        <div className="tabs">
            <div className="tabs__wrapper">
                <button className="tabs__btn" onClick={() => toggleElement('Straldja')}>
                    Straldja
                </button>
                <button className="tabs__btn" onClick={() => toggleElement('NewsComponent')}>
                    Other News
                </button>
                <button className="tabs__btn" onClick={() => toggleElement('Sliven')}>
                    Sliven
                </button>
            </div>
            {activeElement === 'Straldja' && <Straldja/>}
            {activeElement === 'NewsComponent' && <NewsComponent/>}
            {activeElement === 'Sliven' && <Sliven/>}
        </div>
    );
};

export default Tabs;
