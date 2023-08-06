import React from 'react';
import Person from '../../images/person.png'
import BlueMail from '../../icons/BlueMail';
import Number from '../../icons/Number';
import Transition from '../Button/Transition';
import Chat from '../../icons/Chat';

const Card = ({ specialists, username, email, specialization, phone, contact }) => {
    console.log("username: ", username)
    return (
        <div className='w-[294px] h-[450px] bg-[#FCFDFE] border-[#E3E4E5] border rounded-[16px] p-[20px]'>
            <img className='rounded-[12px] w-[254px]' src={Person} alt="" />
            <div className='text-[20px] font-semibold py-[10px]'>{username}</div>

            <div className='text-[15px] mb-[10px]'>
                {
                    specialization === 'ugolovnyi' ? 'Уголовный кодекс' :
                        specialization === 'semeinyi' ? 'Семейный кодекс' :
                            specialization === 'nalogovyi' ? 'Налоговый кодекс' :
                                specialization === 'grajdanskyi' ? 'Гражданский кодекс' :
                                    specialization === 'trudovoyi' ? 'Трудовой кодекс' :
                                        specialization === 'budjetnyi' ? 'Бюджетный кодекс' :
                                            ''
                }
            </div>

            <div className='flex mb-[12px]'>
                <BlueMail />
                <span className='ml-[12px]'>{email}</span>
            </div>
            <div className='flex mb-[12px]'>
                <Number />
                <span className='ml-[12px]'>{phone}</span>
            </div>

            <a href={contact} target="_blank" rel="noopener noreferrer">
                <Transition
                    icon={<Chat />}
                    text="Начать чат"
                />
            </a>

        </div>
    );
}

export default Card;
