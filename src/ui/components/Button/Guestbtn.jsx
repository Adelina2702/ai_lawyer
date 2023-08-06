import React from 'react';

const GuestBtn = ({text}) => {
    return (
        <button
        type="submit"
        className="w-[450px] p-[16px] text-[20px] text-white bg-[#CECECE] hover:bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg "
      >
        {text}
      </button>
    );
}

export default GuestBtn; 
