import React from 'react';
import styles from './styles.module.css'

const Body = ({messages}) => {



    return (
        <>
            <div className={styles.container}>
                {
                    messages.map(element =>
                        localStorage.getItem('user') === element.name ? (
                            <div className={styles.chat} key={element.id}>
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