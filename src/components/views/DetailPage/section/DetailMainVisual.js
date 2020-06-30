/** @format */

import React from "react"
import { IMAGE_BASE_URL } from "../../../Config"
function DetailMainVisual(props) {
    console.log("data", props.data)
    return (
        <div className="detail-main-visual">
            <div
                className="bg-content"
                style={{
                    background: `url(${IMAGE_BASE_URL}w1280${props.data.backdrop_path})`,
                }}
            ></div>
            <h3 className="title">{props.data.title}</h3>
            <ul className="info-list">
                <li>
                    <strong className="tit">POPULARITY</strong>
                    <span className="info">
                        <strong>{props.data.popularity}</strong>%
                    </span>
                </li>
                <li>
                    <strong className="tit">RUNTIME</strong>
                    <span className="info">
                        <strong>{props.data.runtime}</strong>분
                    </span>
                </li>
                <li>
                    <strong className="tit">VOTE AVERAGE</strong>
                    <span className="info">
                        <strong>{props.data.vote_average}</strong>점
                    </span>
                </li>
            </ul>
            <div className="image-box">
                <img
                    src={`${IMAGE_BASE_URL}w300${props.data.poster_path}`}
                ></img>
            </div>
        </div>
    )
}

export default DetailMainVisual
