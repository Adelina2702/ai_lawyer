import React from 'react';

const Transition = ({ text, icon }) => {
  return (
    <div className=''>
      <div className='my-[16px] ml-[50px] absolute'>{icon}</div>
      <button
        type='submit'
        className=' pl-[20px] flex justify-center w-[250px] p-[10px] mb-[20px] text-[18px] text-white bg-[#667EEA] hover:bg-[#764BA2] rounded-lg '>
        {text}
      </button>
    </div>
  );
};

export default Transition;
