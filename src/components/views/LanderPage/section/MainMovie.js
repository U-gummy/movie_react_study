import React from 'react'
import { IMAGE_BASE_URL } from '../../../Config';


function MainMovie(props) {
    // console.log('props: ', props.mainImage);


    return (
        <div className="movie-main-content" style={{background:`url(${IMAGE_BASE_URL}w1280/${props.mainImage.backdrop_path})`}}>
            <strong className="title">{props.mainImage.original_title}</strong>
            <p className="desc">{props.mainImage.overview}</p>
        </div>
    )
}

export default MainMovie
