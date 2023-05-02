import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import loginReducer from "./login-reducer";
import registerReducer from "./register-reducer";
import menuReducer from "./menu-reducer";


let reducers = combineReducers({
    menuPage: menuReducer,
    loginPage: loginReducer,
    responseReducer: {},
    registerPage: registerReducer,
});


let store = createStore(
    reducers,
    applyMiddleware(thunk),
);


export default store;