import React from 'react';

const BtnMainPage = ({ text }) => {
  return (
    <button
      type='submit'
      className='w-[287px] py-[12px] px-[9px] text-[18px] text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg '>
      {text}
    </button>
  );
};

export default BtnMainPage;
