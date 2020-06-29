/** @format */

import React, { useState } from "react"
import "./App.css"
import LanderPage from "./views/LanderPage/LanderPage"
import Logo from "./views/Header/section/Logo"
import Navi from "./views/Navi/Navi"
import CHeader from "./views/Header/Header"
// import LoginPage from "./views/LoginPage/LoginPage"
import FavoritesPage from "./views/FavoritesPage/FavoritesPage"
import MyPage from "./views/MyPage/MyPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom"
// import Auth from "../hoc/auth"
import "antd/dist/antd.css"
import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout

function App() {
    const [Collapsed, setCollapsed] = useState(false)
    function toggle() {
        setCollapsed(!Collapsed)
    }
    return (
        <div className="App">
            <Router>
                <Switch>
                    {/* <Route exact path="/login" component={LoginPage}></Route> */}
                    <Route exact path="/register" component={RegisterPage} />
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={Collapsed}>
                            <Logo></Logo>
                            <Navi></Navi>
                        </Sider>
                        <Layout className="site-layout">
                            <Header className="site-layout-background">
                                {React.createElement(
                                    Collapsed
                                        ? MenuUnfoldOutlined
                                        : MenuFoldOutlined,
                                    {
                                        className: "trigger",
                                        onClick: toggle,
                                    }
                                )}
                                <CHeader></CHeader>
                            </Header>
                            <Content className="site-layout-background">
                                <div className="container">
                                    <div className="content">
                                        <Route exact path="/">
                                            <LanderPage></LanderPage>
                                        </Route>
                                        <Route
                                            exact
                                            path="/favorites"
                                            component={FavoritesPage}
                                        />
                                        <Route
                                            exact
                                            path="/mypage"
                                            component={MyPage}
                                        />
                                    </div>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Switch>
            </Router>
        </div>
    )
}

export default App
