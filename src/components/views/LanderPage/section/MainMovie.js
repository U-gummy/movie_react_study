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
        ></div>
    )
}

export default MainMovie
