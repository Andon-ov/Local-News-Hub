import React, { useState } from 'react';
import NewsComponent from './NewsAPIComponent';
import MediastackAPIComponent from './MediastackAPIComponent';
import './Tabs.css';

const Tabs = () => {
    const [activeElement, setActiveElement] = useState('NewsAPIComponent');

    const toggleElement = (element) => {
        setActiveElement(element);
    };

    return (
        <div className="tabs">
            <div className="tabs__wrapper">
                <button className="tabs__btn" onClick={() => toggleElement('NewsAPIComponent')}>
                    News API
                </button>
                <button className="tabs__btn" onClick={() => toggleElement('MediastackAPIComponent')}>
                    Mediastack API
                </button>
            </div>
            {activeElement === 'NewsAPIComponent' && <NewsComponent />}
            {activeElement === 'MediastackAPIComponent' && <MediastackAPIComponent />}
        </div>
    );
};

export default Tabs;
