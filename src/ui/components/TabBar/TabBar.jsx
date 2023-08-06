import React from 'react'
import styles from './styles.module.css'
import {  personIcon } from '../../images/index.js'
import Plus from '../../icons/Plus'
import Chat2 from '../../icons/Chat2'
import SideBarW from '../../icons/SideBarW'

export default function TabBar() {
    return (
        <div className={styles.tab}>

            <div className={styles.tab__header}>

                <div className={styles.tab__header_img}>
                    <img src={personIcon} alt='/' className={styles.img} />
                </div>

                <p className={styles.tab__header_name}> Имя пользователя</p>
            </div>

            <div className={styles.newChat}>
                <Plus />
                <p className={styles.newChat_text}>Новый чат</p>
                <div className='flex flex-row-reverse'>
                <SideBarW />
                </div>
            </div>

            <div>
                <span className='text-[#D4D4D4] pl-[10px] text-[18px] '>За последний месяц</span>
                <div className='mt-[15px]'>
      <div className=' pl-[10px] absolute'><Chat2 /></div>
      <div
        className='flex pl-[50px] text-[#fff] mb-[20px] text-[17px]'>
        Как подать на развод?
      </div>
      <div className='mt-[15px]'>
      <div className='pl-[10px] absolute'><Chat2 /></div>
      <div
        className='flex ml-[50px] text-[#fff] mb-[20px] text-[17px]'>
        Какие шаги нужно предпр...
    </div>
    <div className='mt-[15px]'>
      <div className='pl-[10px] absolute'><Chat2 /></div>
      <div
        className='pl-[50px] flex text-[#fff] mb-[20px] text-[17px] text-whiteounded-lg '>
        Что делать, если меня увол...
      </div>
    </div> 
    <div className='mt-[15px]'>
      <div className='pl-[10px] absolute'><Chat2 /></div>
      <div
        className='pl-[50px] flex text-[#fff] mb-[20px] text-[17px] text-whiteounded-lg '>
        Какие права имеют сотруд...
      </div>
    </div>
            </div>
            <div className='mt-[15px]'>
      <div className='pl-[10px] absolute'><Chat2 /></div>
      <div
        className='pl-[50px] flex text-[#fff] mb-[20px] text-[17px] text-whiteounded-lg '>
        Какие документы нужны дл...
      </div>
    </div>
            </div>
            <div className='mt-[15px]'>
      <div className='pl-[10px] absolute'><Chat2 /></div>
      <div
        className='pl-[50px] flex text-[#fff] mb-[20px] text-[17px] text-whiteounded-lg '>
        Какие законы регулируют ...
      </div>
    </div>  
</div>
</div>
    )
}
