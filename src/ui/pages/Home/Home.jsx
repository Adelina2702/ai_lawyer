import React from 'react';
import Conteiner from '../../components/Conteiner/Conteiner.jsx';
import { worker, chat } from '../../images/index.js';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Volny from '../../images/volny.png';
import Logo from '../../icons/logo.jsx';

export default function Home() {
  const data = [
    {
      id: 1,
      title: 'Cпециалист',
      text: 'Хорошая юридическая практика позволяет юристу быстрее искать пути решения проблемы, какой бы сложной она не представлялась',
      img: worker,
      link: '/specialists',
    },
    {
      id: 2,
      title: 'Начать Чат',
      text: 'Чат-бот доступен круглосуточно. Он отвечает на запросы ваших клиентов даже в выходные и поздно вечером.',
      img: chat,
      link: '/chat',
    },
  ];

  return (
    <div className={styles.tabBarContainer}>
      <div className={styles.info}>
        <div className='mb-[46px] flex justify-center'>
          <Link to='/main'>
            <Logo />
          </Link>
        </div>
        <p className={styles.info_text}>
          Откройте для себя будущее юридических услуг с нашей платформой на базе
          искусственного интеллекта. Быстрый, точный и безопасный, наш AI
          Juriste меняет способ доступа к юридической информации и помощи.
          Испытайте мощь искусственного интеллекта и экспертное юридическое
          сопровождение в одном месте. Добро пожаловать на борт!
        </p>

        <h1 className={styles.info__title}>Выберите опцию</h1>
        <div className={styles.info_div}>
          {data.map((item) => (
            <Link key={item.id} to={item.link}>
              <Conteiner
                id={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            </Link>
          ))}
        </div>
        <div>
          <img src={Volny} alt='' />
        </div>
      </div>
    </div>
  );
}
