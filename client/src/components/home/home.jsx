import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './styles.module.css'

const Home = ({socket}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', user);
        socket.emit('newLogin', {user, socketId: socket.id});
        navigate('/chat');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <h2>Go to chat</h2>
            <label htmlFor="User Name:"></label>
            <input className={styles.userInput} type="text" id='user' value={user} onChange={(event)=> setUser(event.target.value)}/>
            <button  className={styles.homeBttn} type='submit'> Enter </button>
        </form>
    );
};

export default Home;