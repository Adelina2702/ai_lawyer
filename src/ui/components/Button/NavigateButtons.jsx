import React from 'react';

const NavigateButtons = ({ buttonType, setButtonType, buttonProp }) => {
  const buttons = [
    {
      label: 'Улоговный кодекс',
      value: 0,
    },
    {
      label: 'Семейный кодекс',
      value: 1,
    },
    {
      label: 'Налоговый кодекс',
      value: 2,
    },
    {
      label: 'Гражданский кодекс',
      value: 3,
    },
    {
      label: 'Трудовой кодекс',
      value: 4,
    },
    {
      label: 'Бюджетный кодекс',
      value: 5,
    },
  ];

  return (
    <div className='flex rounded-[16px]  p-[16px]'>
      {buttons?.map((btn, index) => {
        return (
          <button
            key={index}
            onClick={() => setButtonType(btn.value)}
            className={
              buttonType === btn.value
                ? `border-[#764BA2] border-2 mr-[60px] rounded-[24px] px-[12px] py-[17px]`
                : `mr-[36px] border-2 border-[#000] rounded-[24px] px-[12px] py-[17px]`
            }>
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default NavigateButtons;
