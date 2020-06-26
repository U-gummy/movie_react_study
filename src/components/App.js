/** @format */

import React from "react"
import "./App.css"
import LanderPage from "./views/LanderPage/LanderPage"
import Navi from "./views/Navi/Navi"
import Header from "./views/Header/Header"
import LoginPage from "./views/LoginPage/LoginPage"
import FavoritesPage from "./views/FavoritesPage/FavoritesPage"
import MyPage from "./views/MyPage/MyPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom"
import Auth from "../hoc/auth"

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        component={Auth(LoginPage, false)}
                    ></Route>
                    <Route
                        exact
                        path="/register"
                        component={Auth(RegisterPage, false)}
                    />
                    <div>
                        <Header></Header>
                        <div className="container">
                            <Navi></Navi>
                            <div className="content">
                                <Route
                                    exact
                                    path="/"
                                    component={Auth(LanderPage, null)}
                                />
                                <Route
                                    exact
                                    path="/favorites"
                                    component={Auth(FavoritesPage, true)}
                                />
                                <Route
                                    exact
                                    path="/mypage"
                                    component={Auth(MyPage, true)}
                                />
                            </div>
                        </div>
                    </div>
                </Switch>
            </Router>
        </div>
    )
}

export default App
