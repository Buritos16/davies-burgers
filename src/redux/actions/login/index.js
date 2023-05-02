{/*
import axios from 'axios';

import { setMessage, setStatus } from '../../login-reducer';

export const loginAction = (user) =>
    async (dispatch, getState) => {
        try {
            await axios.post('http://localhost:3000/login', {
                user

            });
        } catch (e) {



            const status = e?.response?.status;
            const message = e?.response?.data;
            if(e.status===200)
            {
                console.log('Welcome')
            }
            dispatch(setMessage(message));
            dispatch(setStatus(status));
        }

    }
*/}
