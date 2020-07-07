/** @format */

import React, { useEffect, useState } from "react"
import MainMovie from "./section/MainMovie"
import { API_URL, API_KEY } from "../../Config"
import MovieList from "./section/MovieList"
import Axios from "axios"
import { Tabs, Row, Col } from "antd"
import InfiniteScroll from "react-infinite-scroll-component"

const { TabPane } = Tabs

function LanderPage(props) {
    const tabList = [
        {
            name: "현재상영작",
            urlKey: "now_playing",
        },
        {
            name: "인기순",
            urlKey: "popular",
        },
        {
            name: "평점순",
            urlKey: "top_rated",
        },
        {
            name: "상영예정작",
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
        const endpoint = `${API_URL}movie/${TabKey}?api_key=${API_KEY}&page=${_Page}&language=ko`
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
            {MainMovieImage && (
                <MainMovie mainImage={MainMovieImage}></MainMovie>
            )}
            <Tabs defaultActiveKey="0" onChange={callback}>
                {tabList.map(function (item, idx) {
                    return (
                        <TabPane tab={item.name} key={idx}>
                            <div className="movie-list-content">
                                <InfiniteScroll
                                    dataLength={MainMovieList.length}
                                    next={onClickHandler}
                                    hasMore={true}
                                >
                                    <Row gutter={[16, 24]}>
                                        {MainMovieList &&
                                            MainMovieList.map(function (
                                                item,
                                                idx
                                            ) {
                                                return (
                                                    <Col
                                                        key={idx}
                                                        xs={24}
                                                        sm={12}
                                                        md={8}
                                                        lg={6}
                                                        xl={6}
                                                    >
                                                        <MovieList
                                                            movieInfo={item}
                                                            key={idx}
                                                        ></MovieList>
                                                    </Col>
                                                )
                                            })}
                                    </Row>
                                </InfiniteScroll>
                            </div>
                        </TabPane>
                    )
                })}
            </Tabs>
        </div>
    )
}

export default LanderPage
