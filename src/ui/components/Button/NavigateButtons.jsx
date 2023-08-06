import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterSpecialization } from '../../../redux/slices/SpecialistsSlice';
import styles from './style.module.css'


const NavigateButtons = ({ buttonType, setButtonType, buttonProp }) => {
  const buttons = [
    {
      label: 'Все',
      value: 0
    },

    {
      label: 'Улоговный кодекс',
      value: 1,
    },
    {
      label: 'Семейный кодекс',
      value: 2,
    },
    {
      label: 'Налоговый кодекс',
      value: 3,
    },
    {
      label: 'Гражданский кодекс',
      value: 4,
    },
    {
      label: 'Трудовой кодекс',
      value: 5,
    },
    {
      label: 'Бюджетный кодекс',
      value: 6,
    },

  ];
  const [tabName, setTabName] = useState('')
  const dispatch = useDispatch();

  const checkTab = (value) => {
    setButtonType(value.value)

    setTabName(value.label)


  }


  useEffect(() => {
    dispatch(filterSpecialization(tabName))

  }, [tabName])




  return (
    <div className='flex rounded-[16px]  p-[16px]'>

      {buttons?.map((btn, index) => {
        return (
          <button
            key={index}
            onClick={() => checkTab(btn)}

            // className={
            //   buttonType === btn.value

            //     ? ` border-[#764BA2] border-2 mr-[60px] rounded-[24px] px-[12px] py-[17px]`
            //     : `mr-[36px] border-2 border-[#000] rounded-[24px] px-[12px] py-[17px]`
            // }>


            className={
              buttonType === btn.value

                ? `${styles.check} border-[#764BA2] border-2 mr-[60px] rounded-[24px] px-[10px] py-[17px]`
                : `mr-[36px] border-2 border-[#000] rounded-[24px] px-[12px] py-[17px]`
            }>
            {btn.label}
          </button>
        );
      })}
    </div >
  );
};

export default NavigateButtons;
