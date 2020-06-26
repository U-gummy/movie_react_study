import React from 'react'
import './Navi.css'
import { Link } from "react-router-dom";
function Navi() {
    return (
        <div className="navi">
            <ul>
                <li>
                    <Link to="/">영화목록</Link>
                </li>
                <li>
                    <Link to="/favorites">즐겨찾기</Link>
                </li>
                <li>
                    <Link to="/mypage">마이페이지</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navi
