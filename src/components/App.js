/** @format */

import React, { useState } from "react"
import "./App.css"
import LanderPage from "./views/LanderPage/LanderPage"
import Logo from "./views/Header/section/Logo"
import Navi from "./views/Navi/Navi"
import CHeader from "./views/Header/Header"
import FavoritesPage from "./views/FavoritesPage/FavoritesPage"
import SearchPage from "./views/SearchPage/SearchPage"
import MyPage from "./views/MyPage/MyPage"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import "antd/dist/antd.css"
import { Layout, BackTop } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import DetailPage from "./views/DetailPage/DetailPage"
const { Header, Sider, Content } = Layout

function App() {
    const [Collapsed, setCollapsed] = useState(true)
    function toggle() {
        setCollapsed(!Collapsed)
    }
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={Collapsed}
                        collapsedWidth="0"
                        onClick={function () {
                            setCollapsed(!Collapsed)
                        }}
                    >
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
                            <Switch>
                                <Route exact path="/" component={LanderPage} />
                                <Route
                                    path="/detail/:movId"
                                    component={DetailPage}
                                />
                                <Route
                                    path="/favorites"
                                    component={FavoritesPage}
                                />
                                <Route path="/mypage" component={MyPage} />
                                <Route
                                    path="/search/:searchWord"
                                    component={SearchPage}
                                />
                            </Switch>
                            <BackTop>
                                <div className="btn-top">TOP</div>
                            </BackTop>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </div>
    )
}

export default App
