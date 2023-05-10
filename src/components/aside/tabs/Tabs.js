import React, {useState} from 'react';
import Straldja from './Straldja';
import Jambol from './Jambol';
import Sliven from './Sliven';
import './Tabs.css';


const Tabs = () => {
    const [activeElement, setActiveElement] = useState('Straldja');

    const toggleElement = (element) => {
        setActiveElement(element);
    };

    return (
        <div className='tabs'>
            <div className='tabs__wrapper'>
            <button className='tabs__btn' onClick={() => toggleElement('Straldja')}>Straldja</button>
            <button className='tabs__btn' onClick={() => toggleElement('Jambol')}>Jambol</button>
            <button className='tabs__btn' onClick={() => toggleElement('Sliven')}>Sliven</button>
            </div>
            {activeElement === 'Straldja' && <Straldja/>}
            {activeElement === 'Jambol' && <Jambol/>}
            {activeElement === 'Sliven' && <Sliven/>}
        </div>
    );
};


export default Tabs;
