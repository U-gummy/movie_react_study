/** @format */

import React from "react"
import Video from "./Video"
import Review from "./Review"
function MovieDetail(props) {
    return (
        <div className="movie-detail-content">
            <h3 className="tag-line">{props.data.tagline}</h3>
            <p className="desc">{props.data.overview}</p>
            <ul className="detail-info-list">
                <li>
                    <strong>장르</strong>
                    <span>
                        {props.data.genres.map(function (item, idx) {
                            return props.data.genres[idx].name + " , "
                        })}
                    </span>
                </li>
                <li>
                    <strong>공식사이트</strong>
                    <span>
                        <a href={props.data.homepage} target="_blank">
                            {props.data.homepage}
                        </a>
                    </span>
                </li>
                <li>
                    <strong>평점</strong>
                    <span>{props.data.vote_average}점</span>
                </li>
                <li>
                    <strong>상영시간</strong>
                    <span>{props.data.runtime}분</span>
                </li>
                <li>
                    <strong>개봉일</strong>
                    <span>{props.data.release_date}</span>
                </li>
            </ul>
            <Video data={props.dataVideos.results}></Video>
            <Review data={props.dataReview}></Review>
        </div>
    )
}

export default MovieDetail
