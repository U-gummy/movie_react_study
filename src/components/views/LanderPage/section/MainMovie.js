/** @format */

import React from "react"
import { IMAGE_BASE_URL } from "../../../Config"

function MainMovie(props) {
    return (
        <div
            className="movie-main-content"
            style={{
                backgroundImage: `url(${IMAGE_BASE_URL}w1280/${props.mainImage.backdrop_path})`,
            }}
        >
            <div className="movie-main-text-box">
                <strong className="title">
                    {props.mainImage.original_title}
                </strong>
                <p className="desc">{props.mainImage.overview}</p>
            </div>
        </div>
    )
}

export default MainMovie
