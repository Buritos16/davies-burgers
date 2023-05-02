import React from "react";
import logo from "../../logo.jpg";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = () => {
    return <header>
        <NavLink to="/main" className={s.item}><img className={s.logo} src={logo} alt={'Is not found'}/></NavLink>
    </header>
}

export default Header;