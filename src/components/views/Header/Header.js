/** @format */

import React from "react"
import "./Header.css"
import Search from "./section/Search"
import { Link } from "react-router-dom"
import { Button } from "antd"

function Header() {
    return (
        <div className="header">
            <Search></Search>
            <div className="btn-box">
                <Link to="/login">
                    {/* <button type="button" className="btn btn-login">LOGIN</button> */}
                    <Button>로그인</Button>
                </Link>
            </div>
        </div>
    )
}

export default Header
