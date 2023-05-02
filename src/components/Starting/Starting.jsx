import React from "react";
import s from "./Starting.module.css";
import {NavLink} from "react-router-dom";

const Starting = () => {
    return (
        <div className={s.div}>
            <br/>
            <NavLink to='/menu' className={s.item}>Make an order</NavLink>
            <br/>
            <NavLink to='/login' className={s.item}>Login</NavLink>
            <br/>
        </div>)
}

export default Starting;