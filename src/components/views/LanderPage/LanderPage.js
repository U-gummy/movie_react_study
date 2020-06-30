/** @format */

import React, { useEffect, useState } from "react"
import MainMovie from "./section/MainMovie"
import { API_URL, API_KEY } from "../../Config"
import MovieList from "./section/MovieList"
import Axios from "axios"
import { Tabs, Row, Col, Button } from "antd"
import { Link } from "react-router-dom"

const { TabPane } = Tabs

function LanderPage(props) {
    const tabList = [
        {
            name: "현재상영작",
            urlKey: "now_playing",
        },
        {
            name: "인기순 영화",
            urlKey: "popular",
        },
        {
            name: "평점순 영화",
            urlKey: "top_rated",
        },
        {
            name: "상영예정 영화",
            urlKey: "upcoming",
        },
    ]
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [MainMovieList, setMainMovieList] = useState([])
    const [TabKey, setTabKey] = useState(tabList[0].urlKey)
    const [Page, setPage] = useState(1)
    useEffect(
        function () {
            getMovieList(1)
        },
        [TabKey]
    )

    function getMovieList(_Page) {
        const endpoint = `${API_URL}movie/${TabKey}?api_key=${API_KEY}&page=${_Page}`
        Axios.get(endpoint).then(function (response) {
            if (_Page > 1) {
                setMainMovieList([...MainMovieList, ...response.data.results])
            } else {
                setMainMovieImage(response.data.results[0])
                setMainMovieList([...response.data.results])
            }
            setPage(Number(response.data.page) + 1)
        })
    }
    function callback(key) {
        setTabKey(tabList[key].urlKey)
    }
    function onClickHandler() {
        getMovieList(Page)
    }

    return (
        <div>
            <Tabs defaultActiveKey="0" onChange={callback}>
                {tabList.map(function (item, idx) {
                    return (
                        <TabPane tab={item.name} key={idx}>
                            {MainMovieImage && (
                                <MainMovie
                                    mainImage={MainMovieImage}
                                ></MainMovie>
                            )}
                            <div className="movie-list-content">
                                <Row gutter={[16, 24]}>
                                    {MainMovieList &&
                                        MainMovieList.map(function (item, idx) {
                                            return (
                                                <Col
                                                    key={idx}
                                                    xs={24}
                                                    sm={24}
                                                    md={12}
                                                    lg={8}
                                                    xl={8}
                                                >
                                                    <MovieList
                                                        movieInfo={item}
                                                        key={idx}
                                                    ></MovieList>
                                                </Col>
                                            )
                                        })}
                                </Row>
                                <Button onClick={onClickHandler}>더보기</Button>
                            </div>
                        </TabPane>
                    )
                })}
            </Tabs>
        </div>
    )
}

export default LanderPage
