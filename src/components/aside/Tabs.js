import React, {useState} from 'react';
import Straldja from './tabs/Straldja';
import Jambol from './tabs/Jambol';
import Sliven from './tabs/Sliven';


const Tabs = () => {
    const [activeElement, setActiveElement] = useState('Straldja');

    const toggleElement = (element) => {
        setActiveElement(element);
    };

    return (
        <div>
            <button className='tabs' onClick={() => toggleElement('Straldja')}>Straldja</button>
            <button className='tabs' onClick={() => toggleElement('Jambol')}>Jambol</button>
            <button className='tabs' onClick={() => toggleElement('Sliven')}>Sliven</button>

            {activeElement === 'Straldja' && <Straldja/>}
            {activeElement === 'Jambol' && <Jambol/>}
            {activeElement === 'Sliven' && <Sliven/>}
        </div>
    );
};


export default Tabs;
