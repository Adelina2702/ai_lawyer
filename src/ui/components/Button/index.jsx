import React from 'react';

const Button = ({text}) => {
    return (
        <button
        type="submit"
        className="w-[450px] p-[16px] text-[20px] text-white bg-[#667EEA] hover:bg-[#764BA2] rounded-lg "
      >
        {text}
      </button>
    );
}

export default Button;