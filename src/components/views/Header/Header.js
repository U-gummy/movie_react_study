/** @format */

import React, { useEffect, useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { Input } from "antd"
function Header(props) {
    const { Search } = Input

    return (
        <div className="header">
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
            <div className="btn-box">
                <Link to="/login">
                    <button type="button" className="btn">
                        LOGIN
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Header)
