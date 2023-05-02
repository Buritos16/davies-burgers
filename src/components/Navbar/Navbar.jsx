import React, {useContext} from 'react';
import s from "./Navbar.module.css"
import logo from "../../logo.jpg";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {

    const auth = useContext(AuthContext)
    const history = useHistory()
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/main')
    }


    return (
        <nav role='navigation'>
            <img className={s.logo} src={logo} alt={'Is not found'}/>
            <ul>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><a href="/main" onClick={logoutHandler}>Logout</a></li>
            </ul>
        </nav>
        )
}

export default Navbar
