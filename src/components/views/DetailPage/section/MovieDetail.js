/** @format */

import React from "react"
import Video from "./Video"
function MovieDetail(props) {
    console.log("!!!!!!! ", props.data)
    console.log("vvvvvvv ", props.dataVideos)
    return (
        <div className="movie-detail-content">
            <h3 className="tag-line">{props.data.tagline}</h3>
            <p className="desc">{props.data.overview}</p>
            <ul className="detail-info-list">
                <li>
                    <strong>장르</strong>
                    {props.data.genres.map(function (item, idx) {
                        return props.data.genres[idx].name + " , "
                    })}
                </li>
                <li>
                    <strong>공식사이트</strong>
                    <a href={props.data.homepage} target="_blank">
                        {props.data.homepage}
                    </a>
                </li>
                <li>
                    <strong>평점</strong> {props.data.vote_average}점
                </li>
                <li>
                    <strong>상영시간</strong> {props.data.runtime}분
                </li>
                <li>
                    <strong>개봉일</strong> {props.data.release_date}
                </li>
            </ul>
            <Video data={props.dataVideos.results}></Video>
        </div>
    )
}

export default MovieDetail
