import React from 'react'
import './Header.css'
import Logo from './section/Logo'
import Search from './section/Search'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
             <Link to="/">
                <Logo></Logo>
             </Link>
            <Search></Search>
            <div className="btn-box">
            <Link to="/login">
                <button type="button" className="btn btn-login">LOGIN</button>
            </Link>
            </div>
        </div>
    )
}

export default Header
