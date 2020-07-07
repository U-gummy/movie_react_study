/** @format */

import React from "react"
import "./Header.css"
import Logo from "./section/Logo"
import { withRouter } from "react-router-dom"
import { Input } from "antd"
function Header(props) {
    const { Search } = Input

    return (
        <div className="header">
            <Logo></Logo>
            <form className="form-search">
                <Search
                    placeholder="input search text"
                    onSearch={function (value) {
                        props.history.push(`/search/${value}`)
                        window.location.reload()
                    }}
                    style={{ width: 200 }}
                />
            </form>
        </div>
    )
}

export default withRouter(Header)
