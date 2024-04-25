import React from 'react';
import styles from "../body/styles.module.css";
import {useNavigate} from "react-router-dom";

const LeaveChatButton = () => {
    const navigate = useNavigate();
    const handleLeave = () => {
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <div>
            <button className={styles.button} onClick={handleLeave}> Leave the chat </button>
        </div>
    );
};

export default LeaveChatButton;