import React, { useState } from 'react';
import Eye from '../../icons/Eye';
import UnEye from '../../icons/UnEye';

const Password = ({ helperText, label, placeholder, ...rest }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
      setOpen(!open);
    };

    return (
<div>
      <div className='mb-[5px] text-[20px] font-medium'>{label}</div>
      <label className='relative mb-[20px] text-[20px] font-medium text-gray-900 dark:text-white'>
        <div className='mx-[23px] my-[17px] absolute'>
        {open === false ? (
            <div onClick={toggle}>
              <Eye />
            </div>
          ) : (
            <div onClick={toggle}>
              <UnEye />
            </div>
          )}
        </div>

        <input
          {...rest}
          id='email'
          type={open === false ? 'password' : 'text'}
          className='inline-flex justify-around h-[60px] w-[450px] rounded-lg border bg-gray-50 p-2.5 pl-16 pb-5 pt-4 text-[20px] 
          font-normal text-gray-900  dark:placeholder:text[#CECECE]'
          placeholder={placeholder}
        />
        <div className="text-[red] text-[15px] mb-[18px] max-w-[415px] h-[10px]">
          {helperText}
        </div>
      </label>
    </div>
    );
}

export default Password;
