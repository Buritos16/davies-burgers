const LOGIN_USER = 'LOGIN-USER';

export const setStatus = (status) => ({
    type: 'STATUS',
    status,
});

export const setMessage = (message) => ({
    type: 'MESSAGE',
    message,
});

let initialState = {
    loginPage: {
        users: [
            {login: '', password: ''}
        ]}
};

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            const newState = { ...state };

            newState.loginPage.users.push(action.user);
            return newState;
        default:
            return state;
    }
}

export const loginUserActionCreator = (user) => ({ type: 'LOGIN-USER', user: user });

export default loginReducer;