import {useState} from 'react';
import styles from './styles.module.css';


const MessageBlock = ({socket}) => {
    const [message, setMessage] = useState('');

    const handleSend = (event) => {
        event.preventDefault();

        if(message.trim() && localStorage.getItem('user')){
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('user'),
                id: `${socket.id}-${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('')
    }

    return (
        <div className={styles.messageBlock}>
            <form className={styles.form} onSubmit={handleSend}>
                <input
                    type="text" className={styles.userMessage}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <button className={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default MessageBlock;