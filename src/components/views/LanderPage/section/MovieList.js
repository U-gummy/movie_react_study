import React from 'react'
import { IMAGE_BASE_URL } from '../../../Config';

function MovieList(props) {
    // console.log("MovieList",props.movieInfo);
    return (
        <div className="movie-list">
            <div className="movie-img" style={{backgroundImage:`url(${IMAGE_BASE_URL}w300/${props.movieInfo.backdrop_path})`}}>
            </div>
            <div className="movie-info">
                <strong className="title">{props.movieInfo.original_title}</strong>
                <p className="desc">{props.movieInfo.overview}</p>
            </div>
        </div>
    )
}

export default MovieList
