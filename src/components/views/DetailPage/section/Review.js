/** @format */

import React from "react"
import { UserOutlined } from "@ant-design/icons"
function Review(props) {
    return (
        <div>
            <h4 className="content-title">
                REVIWE ( {props.data.total_results} )
            </h4>
            <ul className="review-list">
                {props.data.results.map(function (item, idx) {
                    return (
                        <li key={idx}>
                            <div className="name-box">
                                <UserOutlined />
                                <strong className="name">{item.author}</strong>
                            </div>
                            <div className="desc-box">
                                <p className="desc">
                                    <a href={item.url} target="_blank">
                                        {item.content}
                                    </a>
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Review
