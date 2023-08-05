import React, { useEffect, useRef, useState } from 'react'
import TabBar from '../TabBar/TabBar'
import styles from './styles.module.css'
import { personIcon, mainIcon, iconSend } from '../../images/index.js'


export default function Chat() {

    const [newMessage, setNewMessage] = useState('');
    const messageContainerRef = useRef(null);

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };
    const [messages, setMessages] = useState([
        { text: 'Запрос 1', type: 'request' },
        { text: 'Ответ 1', type: 'response' },
        { text: 'Запрос 2', type: 'request' },
        { text: 'Ответ 2', type: 'response' },

    ]);


    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMessageObject = { text: newMessage, type: 'request' };
            setMessages([...messages, newMessageObject]);

            console.log("newMessage: ", messages)
            setNewMessage('')
        }
    }

    useEffect(() => {
        // Прокручиваем контейнер вниз при добавлении нового сообщения
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div className={styles.content} >
            <div className={styles.tab} >

                <TabBar />
            </div>

            <div className={styles.info}>

                <div className={styles.headers}>

                    <div className={styles.headers_icon}>
                        <img className={styles.icon} src={mainIcon} alt='/' />

                    </div>


                    <div className={styles.text}>
                        <h1 className={styles.text_title}>Уголовный кодекс КР</h1>
                        <p className={styles.text_text}> Ваш проводник по налоговому кодексу КР</p>
                    </div>
                </div>
                {/* ОТправька чата */}

                <div className={styles.chat}>

                    <div ref={messageContainerRef} className={styles.messageContainer}>
                        {messages?.map((message, index) => (
                            <div
                                key={index}
                                className={`${styles.message} 
                                ${message.type === 'request' ?
                                        styles.requestMessage :
                                        styles.responseMessage}`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>




                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            value={newMessage}
                            placeholder='Введите ваше сообщение'
                            onChange={(e) => handleInputChange(e)}
                            className={styles.input}
                        />

                        <button
                            className={newMessage.length > 0 ? styles.sendButtonOpacity : styles.sendButton}
                            disabled={!newMessage}
                            onClick={handleSendMessage}>
                            <img src={iconSend} alt='Send'
                                className={styles.sendIcon} />
                        </button>


                    </div>


                </div>




            </div>



        </div>


    )
}
