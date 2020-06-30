/** @format */

import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { API_URL, API_KEY } from "../../Config"
import Axios from "axios"
import { Tabs } from "antd"
import Cast from "./section/Cast"
import MovieDetail from "./section/MovieDetail"
import SimilarMovies from "./section/SimilarMovies"
import DetailMainVisual from "./section/DetailMainVisual"
const { TabPane } = Tabs

function DetailPage(props) {
    const [MainMovie, setMainMovie] = useState(null)
    const movId = props.match.params.movId
    const endpoint = `${API_URL}movie/${movId}?api_key=${API_KEY}`

    useEffect(function () {
        Axios.get(endpoint).then(function (response) {
            console.log(response.data)
            setMainMovie(response.data)
        })
    }, [])

    let tabList = [
        {
            name: "영화상세정보",
            component: <MovieDetail data={MainMovie} />,
        },
        { name: "출연진", component: <Cast /> },
        { name: "유사 영화", component: <SimilarMovies /> },
    ]
    return (
        <div className="movie-detail-content">
            {MainMovie && (
                <DetailMainVisual data={MainMovie}></DetailMainVisual>
            )}
            <Tabs defaultActiveKey="0">
                {tabList.map(function (item, idx) {
                    return (
                        <TabPane tab={item.name} key={idx}>
                            {item.component}
                        </TabPane>
                    )
                })}
            </Tabs>
        </div>
    )
}

export default withRouter(DetailPage)
