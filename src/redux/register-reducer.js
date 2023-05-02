const ADD_USER = 'ADD-USER';


let initialState = {
    registerPage: {
        users: [
            {name: '', surname: '', email: '', password: '',}
        ]
    }
}

const registerReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            state.registerPage.users.push(action.newUser);
            return state;

        default:
            return state;
    }
}

export const addUserActionCreator = (user) => {
    return { type: 'ADD-USER', newUser: user }
}

export default registerReducer;