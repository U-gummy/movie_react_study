/** @format */

import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { Layout } from "antd"
import ScrollToTop from "react-scroll-up"
import "./App.css"
import "antd/dist/antd.css"
import LanderPage from "./views/LanderPage/LanderPage"
import InnerHeader from "./views/Header/Header"
import SearchPage from "./views/SearchPage/SearchPage"
import DetailPage from "./views/DetailPage/DetailPage"
const { Header, Content } = Layout

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Layout className="site-layout">
                        <Header className="site-layout-background">
                            <InnerHeader></InnerHeader>
                        </Header>
                        <Content className="site-layout-background">
                            <Switch>
                                <Route exact path="/" component={LanderPage} />
                                <Route
                                    path="/detail/:movId"
                                    component={DetailPage}
                                />
                                <Route
                                    path="/search/:searchWord"
                                    component={SearchPage}
                                />
                            </Switch>
                            <ScrollToTop showUnder={160}>
                                <span className="btn-top">UP</span>
                            </ScrollToTop>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </div>
    )
}

export default App
