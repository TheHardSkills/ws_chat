import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'

const Sidebar = ({socket}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        socket.on('responseNewLogin', (data) => setUsers(data))
    }, [socket, users]);

    const filteredList = users.filter((value, index, self)=>
        index === self.findIndex(elem => (
            elem.user === value.user && elem.socketID === value.socketID
        ))
    )

    return (
        <div className={styles.sidebar}>
            <h4 className={styles.header}>Users: </h4>
            <ul className={styles.users}>
                {filteredList.map(elem=>(
                    <li key={elem.socketID}>{elem.user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;