/** @format */

import React from "react"
import "./Navi.css"
import { Link } from "react-router-dom"
import { Menu } from "antd"
import { HomeOutlined, UserOutlined, StarOutlined } from "@ant-design/icons"

function Navi() {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">영화목록</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<StarOutlined />}>
                <Link to="/favorites">즐겨찾기</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                <Link to="/mypage">마이페이지</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navi
