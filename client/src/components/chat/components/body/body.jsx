import React from 'react';
import styles from './styles.module.css'
import {useNavigate} from "react-router-dom";

const Body = ({messages}) => {
    const navigate = useNavigate();
    const handleLeave = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <>
            <header className={styles.header}>
                <button className={styles.bttn} onClick={handleLeave}> Leave the chat </button>
            </header>

            <div className={styles.container}>
                {
                    messages.map(element =>
                        localStorage.getItem('user') === element.name ? (
                            <div className={styles.chat}>
                                <p className={styles.senderName}> You: </p>
                                <div className={styles.messageSender}>
                                    <p>{element.text}</p>
                                </div>
                            </div>
                            ):(
                            <div className={styles.chat}>
                                <p > {element.name}: </p>
                                <div className={styles.messageRecipient}>
                                    <p>{element.text}</p>
                                </div>
                            </div>
                            )
                        )
                }



            </div>
        </>
    );
};

export default Body;