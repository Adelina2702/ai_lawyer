import React from 'react';
import Input from '../../components/Input';
import Background from '../../images/background.png';
import './Login.css';
import User from '../../icons/User';

export const LogIn = () => {
  return (
    <div className='container'>
      <img className='background_image' src={Background} alt='' />
      <div className='container_right'>
        <div className='container_right__top'>
          <span className='container_right__title'>Регистрация</span>
        </div>
        <div className="container_right__center">
        <Input helperText={'Имя пользователя'} icon={<User/>} placeholder={'введите имя'}/>
        <Input helperText={'Почта'} />
        </div>
      </div>
    </div>
  );
};
