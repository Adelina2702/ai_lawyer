import React from 'react';
import Person from '../../images/person.png'
import BlueMail from '../../icons/BlueMail';
import Number from '../../icons/Number';
import Transition from '../Button/Transition';
import Chat from '../../icons/Chat';

const Card = () => {
    return (
        <div className='w-[294px] h-[416px] bg-[#FCFDFE] border-[#E3E4E5] border rounded-[16px] p-[20px]'>
            <img className='rounded-[12px] w-[254px]' src={Person} alt="" />
            <div className='text-[20px] font-semibold py-[16px]'>Алексей Марков</div>
            <div className='flex mb-[12px]'>
                <BlueMail/>
                <span className='ml-[12px]'>alisamarkova@gmail.com</span>
            </div>
            <div className='flex mb-[12px]'>
                <Number/>
                <span className='ml-[12px]'>+996 555 444 555</span>
            </div>
            <Transition
            icon={<Chat/>}
            text="Начать чат"
            />
            </div>
    );
}

export default Card;
