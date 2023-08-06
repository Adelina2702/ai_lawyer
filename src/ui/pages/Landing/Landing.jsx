import React from 'react';
import LandingImg  from '../../images/landingImg.png'
import Button from '../../components/Button';
import GuestBtn from '../../components/Button/Guestbtn';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='text-center'>
        <div className='flex justify-center text-center '>
      <img className='w-[150vh] flex justify-center text-center border-none' src={LandingImg} alt='' />
        </div>
      <div className='w-[100%] h-[30%] bg-[667EEA] rounded-[1440px]'></div>
       <h3 className='mb-[50px] mt-[20px] text-[35px] font-semibold text-center'>Присоединяйтесь к нам сейчас!</h3>
       <div className='flex justify-center mb-[20px]'>
        <Link to='/register'>
       <Button text="Зарегистрироваться"/>
        </Link>
        <div className='ml-[76px] bg-[#CECECE]'>
            <Link to='/main'>
            <GuestBtn text="Войти как гость"/>
            </Link>
        </div>
       </div>
    </div>
  );
};

export default Landing;
