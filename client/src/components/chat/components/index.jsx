import React, {useEffect, useState} from 'react';
import Sidebar from "./sidebar/sidebar.jsx";
import Body from "./body/body.jsx";
import MessageBlock from "./message-block/message-block.jsx";
import styles from './styles.module.css'

const ChatPage = ({socket}) => {
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        socket.on('response', (data) => setMessages([...messages, data]));
    }, [socket, messages])


    return (
        <div className={styles.chat}>
            <Sidebar/>
            <main className={styles.main}>
                <Body messages={messages}/>
                <MessageBlock socket={socket}/>
            </main>
        </div>
    );
};

export default ChatPage;