/** @format */

import React from "react"
import { Input } from "antd"
import { AudioOutlined } from "@ant-design/icons"

function Search() {
    const { Search } = Input

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: "#1890ff",
            }}
        />
    )
    return (
        <form className="form-search">
            <Search
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
            />
            {/* <input type="text" className="h-search"></input>
            <button type="button" className="btn btn-search">
                검색
            </button> */}
        </form>
    )
}

export default Search
