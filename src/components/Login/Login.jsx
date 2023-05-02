import React, {useContext, useEffect, useState} from "react";
import s from "./Login.module.css";
import {NavLink, useHistory} from "react-router-dom";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

const LoginPage = () => {

    const history = useHistory()
    const auth = useContext(AuthContext)

    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({email: '', password: ''})

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            history.push('/menu')
        } catch (e) {
        }
    }


    return (
        <div className={s.div}>
            <br/>
            <div>
                <h5 className={s.log}>E-mail</h5>
                <input
                    className={s.text}
                    onChange={changeHandler}
                    placeholder="Input email"
                    type="text"
                    name="email"
                />
            </div>
            <div>
                <h5 className={s.log}>Password</h5>
                <input
                    type="password"
                    className={s.text}
                    placeholder="Input password"
                    id="password"
                    name="password"
                    onChange={changeHandler}
                />
            </div>
            {/*{responseReducer.message && (<p>{responseReducer.message}</p>)}*/}
            <br/>


                <button className={s.item} onClick={loginHandler}>Login</button>

            <br/>
            <NavLink to='/register' className={s.item}>Register</NavLink>
            <br/>
        </div>)
}

export default LoginPage;