import React, {useEffect, useState} from "react";
import s from "./Register.module.css";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";



export const AuthPage = () => {
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

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }


    {/* const dispatch = useDispatch()

    let newName = React.createRef();
    let newSurname = React.createRef();
    let newEmail = React.createRef();
    let newPassword = React.createRef();

    let addUser = () => {
        let user = {
            name: newName.current.value,
            surname: newSurname.current.value,
            email: newEmail.current.value,
            password: newPassword.current.value
        }
        let action = addUserActionCreator(user);
        dispatch(action);
    }
    */
    }


    return (
        <div className={s.div}>
            <br/>
            <div>
                <h5 className={s.log}>Name</h5>
                <input className={s.text}/>
            </div>
            <div>
                <h5 className={s.log}>Surname</h5>
                <input className={s.text}/>
            </div>
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
                <input type="password"
                       className={s.text}
                       placeholder="Input password"
                       id="password"
                       name="password"
                       onChange={changeHandler}
                />
            </div>

                <button className={s.item} onClick={registerHandler} disabled={loading}>Register</button>

            <br/>
        </div>)

}
//export default Register;