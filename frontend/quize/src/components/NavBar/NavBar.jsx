import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from './img/male_boy_person_people_avatar_icon_159358.png'




import styles from './NavBar.module.css';
import {userAC} from "../redux/actionCreators/userAC";
import {delUserAC} from "../redux/actionCreators/delUserAC";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const NavBar = () => {
    const {user}=useSelector(state=>state.user)
    const dispatch=useDispatch()

    const logout = async () => {
        await fetch('http://localhost:4000/logout',{
            method:"GET",
            credentials: 'include',
        })
        dispatch(delUserAC())
    }
    // console.log(user)
    return (
            <div className={styles.container}>
                {user
                    ?
                <>
                    <ul className={styles.list__container}>
                        <li><NavLink to="/main">Home</NavLink></li>
                        <li><Typography component="div" style={{fontFamily:'sans-serif', fontWeight:600,display:'block',margin:0}}>
                            <Box sx={{ textTransform: 'capitalize', m: 1 }} style={{fontFamily:'sans-serif', fontWeight:600,display:'block',margin:0}}>{`Hello, ${user.name}`}
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src={img} />
                                </StyledBadge>
                            </Box>
                        </Typography>
                        </li>
                        <li><NavLink to="/pc">Personal Cab</NavLink></li>
                        <li><NavLink to="/best">Leaders Board</NavLink></li>
                        <li><NavLink to='/' onClick={()=>logout()}>Logout</NavLink></li>
                    </ul>
                </>
                        :
                    <>
                    <ul className={styles.list__container}>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        </ul>
                    </>
                    }
            </div>
    )
}



export default NavBar;
