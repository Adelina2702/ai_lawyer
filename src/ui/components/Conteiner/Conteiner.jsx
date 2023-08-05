import React from 'react'
import styles from '../Conteiner/styles.module.css'

function Conteiner({ id, title, text, img }) {
    return (
        <div key={id} className={styles.conterner}>

            <div className={styles.headers}>

                <h1 className={styles.conteiner__title}>
                    {title}
                </h1>
                <img src={img} alt='/' className={styles.headers_icon} />
            </div>



            <p className={styles.headers__text}>
                {text}
            </p>
            <button className={styles.conteiner_btn}>
                Перейти
            </button>

            <div className={styles.bookmark}></div>

        </div >
    )
}


export default Conteiner