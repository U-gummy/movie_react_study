/** @format */

import React from "react"
import { IMAGE_BASE_URL } from "../../../Config"
import { withRouter } from "react-router-dom"
import { Rate } from "antd"
function MovieList(props) {
    function onClickDetailPage(e) {
        props.history.push(`/detail/${e.target.parentNode.dataset.id}`)
        window.location.reload()
    }
    return (
        <div
            className="movie-list"
            onClick={onClickDetailPage}
            data-id={props.movieInfo.id}
        >
            <div
                className="movie-img"
                style={{
                    backgroundImage: `url(${IMAGE_BASE_URL}w500/${props.movieInfo.poster_path})`,
                }}
            ></div>
            <div className="movie-info">
                <strong className="title">
                    {props.movieInfo.original_title}
                </strong>
                <p className="desc">{props.movieInfo.overview}</p>
            </div>
            <div className="hover-box">
                <Rate
                    disabled
                    defaultValue={props.movieInfo.vote_average / 2}
                />
            </div>
        </div>
    )
}

export default withRouter(MovieList)
