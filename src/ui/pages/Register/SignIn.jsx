import React from 'react';
import Background from '../../images/background.png';
import User from '../../icons/User';
import Email from '../../icons/Email';
import Button from '../../components/Button';
import Input from '../../components/Input/CustomInput';
import Password from '../../components/Input/Password';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <div className='flex'>
      <img className='h-[100vh]' src={Background} alt='' />
      <div className='flex flex-col ml-[270px] mt-[60px]'>
          <span className='mb-[20px] text-[36px] text-center font-semibold'>Регистрация</span>
        <div className='container_right__center'>
          <Input
            label={'Имя'}
            icon={<User />}
            placeholder={'введите имя'}
          />
          <Input
            label={'Почта'}
            icon={<Email />}
            placeholder={'введите email'}
          />
          <Password
            label={'Пароль'}
            placeholder={'введите пароль'}
          />
          <Password
            label={'Повторите пароль'}
            placeholder={'введите ещё пароль'}
          />
          <Button text={'Регистрация'} />
          <Link to='/login'>
          <div className='mt-[20px] text-[20px] text-center'>Войти в аккаунт</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
