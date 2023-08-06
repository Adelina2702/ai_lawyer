import React from 'react';
import Background from '../../images/background.png';
import Input from '../../components/Input/CustomInput';
import Email from '../../icons/Email';
import Password from '../../components/Input/Password';
import Button from '../../components/Button';
import { useFormik } from 'formik';
import { schema } from '../../utils/shcema';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../../../redux/slices/LoginSlice';

const initialValues = {
  email: '',
  password: '',
};

const LogIn = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("valu234e", values);
    dispatch(loginThunk(values))
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
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col ml-[270px] mt-[200px]'>
        <span className='mb-[20px] text-[36px] text-center font-semibold'>
          Вход
        </span>
        <div className='container_right__center'>
          <Input
            value={formik.values.email}
            name='email'
            onChange={formik.handleChange}
            label={'Почта'}
            helperText={formik.errors.email}
            error={formik.errors.email}
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
          placeholder={'введите пароль'} />
          <Button text={'Войти'} />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
