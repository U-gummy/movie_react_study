/** @format */

import React, { useEffect, useState } from "react"
import MainMovie from "./section/MainMovie"
import { API_URL, API_KEY } from "../../Config"
import MovieList from "./section/MovieList"
import Axios from "axios"

function LanderPage(props) {
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [MainMovieList, setMainMovieList] = useState(null)

    useEffect(function () {
        console.log("landingPage", props.userInfo)
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}`
        Axios.get(endpoint).then(function (response) {
            // console.log(response.results[0]);
            setMainMovieImage(response.data.results[0])
            setMainMovieList(response.data.results)
        })
        fetch(endpoint)
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                // console.log(response.results[0]);
                setMainMovieImage(response.results[0])
                setMainMovieList(response.results)
            })
    }, [])

    return (
        <div>
            {MainMovieImage && (
                <MainMovie mainImage={MainMovieImage}></MainMovie>
            )}
            <div className="movie-list-content">
                {MainMovieList &&
                    MainMovieList.map(function (item, idx) {
                        return (
                            <MovieList movieInfo={item} key={idx}></MovieList>
                        )
                    })}
            </div>
        </div>
    )
}

export default LanderPage
