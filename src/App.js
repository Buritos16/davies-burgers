import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Starting from "./components/Starting/Starting";
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route} from "react-router-dom"
import {AuthPage} from "./components/Register/Register";
import LoginPage from "./components/Login/Login";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Thanks from "./components/Thanks/Thanks";

const App = (props) => {
    const {token, login, logout, userId} = useAuth()

    const isAuthenticated = !!token
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <BrowserRouter>
                { isAuthenticated && <Navbar /> }
                <div className='grid'>
                    { !isAuthenticated && <Header /> }

                    <div className='app-wrapper-content'>
                        {/*<Route path='/login' component={}/>*/}
                        <Route path='/main' render={() => <Starting/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/register' render={() => <AuthPage/>}/>
                        <Route path='/menu' render={() => <Menu/>}/>
                        <Route path='/thanks' render={() => <Thanks />}/>

                    </div>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
