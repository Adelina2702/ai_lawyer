import React from 'react'
import Conteiner from '../../components/Conteiner/Conteiner.jsx'
import { worker, chat } from '../../images/index.js'
import TabBar from '../../components/TabBar/TabBar.jsx'
import styles from './Home.module.css'

export default function Home() {

    const data = [
        {
            id: 1,
            title: 'Cпециалист',
            text: 'Хорошая юридическая практика позволяет юристу быстрее искать пути решения проблемы, какой бы сложной она не представлялась',
            img: worker,
            link: '/worker'
        },
        {
            id: 2,
            title: 'Начать Чат',
            text: 'Чат-бот доступен круглосуточно. Он отвечает на запросы ваших клиентов даже в выходные и поздно вечером.',
            img: chat
        }
    ]


    return (
        <div className={styles.tabBarContainer}>

            <div className={styles.tab}>
                <TabBar />

            </div>

            <div className={styles.info}>
                <p className={styles.info_text}>Откройте для себя будущее юридических услуг с нашей платформой на базе искусственного интеллекта. Быстрый, точный и безопасный, наш AI Juriste меняет способ доступа к юридической информации и помощи. Испытайте мощь искусственного интеллекта и экспертное юридическое сопровождение в одном месте. Добро пожаловать на борт!</p>
                <h1 className={styles.info__title}>Выберите опцию</h1>
                <div className={styles.info_div}>


                    {
                        data.map((item) => (
                            <Conteiner
                                id={item.id}
                                title={item.title}
                                text={item.text}
                                img={item.img}
                            />

                        ))
                    }
                </div>

            </div>
        </div>
    )
}
