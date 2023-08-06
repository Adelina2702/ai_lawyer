import React, { useEffect, useRef, useState } from 'react'
import TabBar from '../TabBar/TabBar'
import styles from './styles.module.css'
import { personIcon, mainIcon, iconSend, iconLogo } from '../../images/index.js'
import { postMessage } from '../../../api/chat';
import { useDispatch, useSelector } from 'react-redux';
import { saveReqest } from '../../../redux/slices/ChatSlice';



export default function Chat() {

    const [newMessage, setNewMessage] = useState('');
    const messageContainerRef = useRef(null);
    const { message, status, error } = useSelector(state => state.chat);

    const dispatch = useDispatch();


    console.log("status: ", status.postMessageStatus)
    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };


    useEffect(() => {
        console.log(
            "message: ", message
        )

    }, [message])


    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {

            dispatch(postMessage({ user_input: newMessage }))

            dispatch(saveReqest({ user_input: newMessage }))

            setNewMessage('')
        }
    }

    useEffect(() => {
        // Прокручиваем контейнер вниз при добавлении нового сообщения
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [message]);


    return (
        <div className={styles.content}>
            <div className={styles.tab}>
                <TabBar />
            </div>

            <div className={styles.info}>
                <div className={styles.headers}>
                    <div className={styles.headers_icon}>
                        <img className={styles.icon} src={mainIcon} alt='/' />
                    </div>
                    <div className={styles.text}>
                        <h1 className={styles.text_title}>AI JURIST</h1>
                        <p className={styles.text_text}> Ваш проводник по законам КР</p>
                    </div>
                </div>

                {/* ОТправька чата */}

                <div className={styles.chat}>
                    <div ref={messageContainerRef} className={styles.messageContainer}>





                        {message?.map((message, index) => (
                            <div
                                className={`
                            ${!message.bot_response ?
                                        styles.requestDiv :
                                        styles.responseDiv}`} >

                                <img className={styles.messege_icon} src={
                                    !message.bot_response ? personIcon : iconLogo
                                } alt='/' />

                                {/* Loding */}


                                <div
                                    key={index}
                                    className={`${styles.message} 
                                  ${!message.bot_response ?
                                            styles.requestMessage :
                                            styles.responseMessage}`}>

                                    {message.bot_response ? message.bot_response : message.user_input}

                                </div>

                            </div>
                        ))}
                        {
                            (status.postMessageStatus === 'Loading message') &&
                            <div className={styles.loading}>
                                <div className={styles.dots}>
                                    <span className={styles.dot}></span>
                                    <span className={styles.dot}></span>
                                    <span className={styles.dot}></span>
                                </div>
                            </div>

                        }
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
