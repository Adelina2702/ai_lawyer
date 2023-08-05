import React from 'react';
import NavigateButtons from '../../components/Button/NavigateButtons';
import { useState } from 'react';
import Card from '../../components/Card';

const Specialists = () => {
    const [buttonType, setButtonType] = useState(0);
    return (
        <div className='flex flex-col'>
        <div className='flex justify-center'>
            <NavigateButtons 
                      buttonType={buttonType}
                      setButtonType={setButtonType}
                      />
        </div>
        <div className='flex justify-center'>  
            <Card/>
        </div>
                      </div>
    );
}

export default Specialists;
