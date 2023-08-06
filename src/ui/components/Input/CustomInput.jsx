import React from 'react';

const Input = ({ icon, helperText, placeholder, error,label, ...rest}) => {
  return (
    <div>
      <div className='mb-[5px] text-[20px] font-medium'>{label}</div>
      <label className='relative mb-[18px] text-[20px] font-medium text-gray-900 dark:text-white'>
        <div className='mx-[23px] my-[17px] absolute'>{icon}</div>
        <input
          {...rest}
          id='email'
          type='text'
          className='inline-flex justify-around h-[60px] w-[450px]  rounded-lg border bg-gray-50 p-2.5 pl-16 pb-5 pt-4 text-[20px] 
          font-normal text-gray-900  dark:placeholder:text[#CECECE]'
          placeholder={placeholder}
          autoComplete='off'
        />
        <div className="text-[red] text-[16px] mb-[12px] max-w-[415px] h-[10px]">
          {helperText}
        </div>
      </label>
    </div>
  );
};

export default Input;
