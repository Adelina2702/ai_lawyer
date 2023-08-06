import React, { useEffect } from 'react';
import Background from '../../images/background.png';
import User from '../../icons/User';
import Email from '../../icons/Email';
import Button from '../../components/Button';
import Input from '../../components/Input/CustomInput';
import Password from '../../components/Input/Password';
import { Link, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../../redux/slices/RegisterSlice';
import { useFormik } from 'formik';
import { schema } from '../../utils/shcema';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  username: '',
  email: '',
  password: '',
  confirm: ''
};

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { statusRegist } = useSelector((state) => state.register)

  useEffect(() => {
    console.log("statusRegist: ", statusRegist)
  }, [statusRegist])


  const onSubmit = (values) => {


    dispatch(registerThunk({ user: values, navigate }));
  };


  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit,
  });


  return (
    <div className='flex'>
      <img className='h-[100vh]' src={Background} alt='' />
      <form onSubmit={formik.handleSubmit} className='flex flex-col ml-[270px] mt-[60px]'>
        <span className='mb-[20px] text-[36px] text-center font-semibold'>
          Регистрация
        </span>
        <div className='container_right__center'>
          <Input
            value={formik.values.username}
            name='username'
            onChange={formik.handleChange}
            error={(formik.touched.username || formik.errors.username)}
            helperText={formik.errors.username}
            label={'Имя'}
            icon={<User />}
            placeholder={'введите имя'}
          />
          <Input
            value={formik.values.email}
            name='email'
            onChange={formik.handleChange}
            error={(formik.touched.email || formik.errors.email)}
            helperText={formik.errors.email}
            label={'Почта'}
            icon={<Email />}
            placeholder={'введите email'}
          />
          <Password
            name='password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={(formik.touched.password || formik.errors.password)}
            helperText={formik.errors.password}
            label={'Пароль'}
            placeholder={'введите пароль'}
          />
          <Password
            name='confirm'
            type='passwod'
            value={formik.values.confirm}
            onChange={formik.handleChange}
            error={(formik.touched.confirm || formik.errors.confirm)}
            helperText={formik.errors.confirm}
            label={'Повторите пароль'}
            placeholder={'введите ещё пароль'}
          />
          <Button text={'Регистрация'} />
          <Link to='/login'>
            <div
              className='mt-[20px] text-[20px] text-center'>
              Войти в аккаунт
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};
