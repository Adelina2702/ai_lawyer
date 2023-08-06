import React, { useEffect, } from 'react';
import NavigateButtons from '../../components/Button/NavigateButtons';
import { useState } from 'react';
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecialists } from '../../../api/specialists';
import style from './style.module.css'

const Specialists = () => {


    const [buttonType, setButtonType] = useState(0);
    const dispatch = useDispatch();
    const { specialists } = useSelector(state => state.specialists)


    useEffect(() => {
        dispatch(getSpecialists())
    }, [])


    return (
        <div className='flex flex-col'>
            <div className='flex justify-center'>
                <NavigateButtons
                    buttonType={buttonType}
                    setButtonType={setButtonType}
                />
            </div>
            {/* style={{ display: 'flex' }} className='flex justify-center' */}
            <div className={style.card}>
                {
                    specialists.map((item) => (
                        <Card
                            key={item.id}
                            username={item.username}
                            email={item.email}
                            specialization={item?.specialization}
                            phone={item.phone}
                            contact={item.contact} // link
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default Specialists;
