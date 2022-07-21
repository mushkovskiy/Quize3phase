import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";



import styles from './NavBar.module.css';

const NavBar = () => {
    const {user}=useSelector(state=>state.user)
    return (
            <div className={styles.container}>
                {user.name
                    ?
                <>
                    <ul className={styles.list__container}>
                        <li><NavLink to="/main">Home</NavLink></li>
                        <li>{user.name}</li>
                        <li><NavLink to="/pc">Personal Cab</NavLink></li>
                        <li><NavLink to="/best">Leaders Board</NavLink></li>
                        <li><NavLink to='/logout'>Logout</NavLink></li>
                    </ul>
                </>
                        :
                    <>
                    <ul className={styles.list__container}>
                        <li><NavLink to='/logout'>Login</NavLink></li>
                        </ul>
                    </>
                    }
            </div>
    )
}



export default NavBar;
