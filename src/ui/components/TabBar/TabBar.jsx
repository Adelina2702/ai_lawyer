import React from 'react'
import styles from './styles.module.css'
import { worker, personIcon } from '../../images/index.js'
import Plus from '../../icons/Plus'

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
            </div>





        </div >
    )
}
