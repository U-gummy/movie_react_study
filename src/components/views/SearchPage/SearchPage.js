/** @format */

import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config"
import Axios from "axios"
import { Row, Col } from "antd"
import ModalPop from "./p/ModalPop"
import InfiniteScroll from "react-infinite-scroll-component"
function SearchPage(props) {
    const searchWord = props.match.params.searchWord
    const [List, setList] = useState([])
    const [Page, setPage] = useState(1)
    function onClickDetailPage(e) {
        props.history.push(`/detail/${e.target.parentNode.dataset.id}`)
        window.location.reload()
    }
    useEffect(function () {
        getSearchList(1)
    }, [])
    const [ModalInfo, setModalInfo] = useState(null)
    function closeHandler() {
        setModalInfo(null)
    }
    function getSearchList(_Page) {
        const endpoint = `${API_URL}search/multi?api_key=${API_KEY}&query=${searchWord}&page=${_Page}&language=ko`
        Axios.get(endpoint).then(function (response) {
            if (_Page > 1) {
                setList([...List, ...response.data.results])
            } else {
                setList([...response.data.results])
            }
            setPage(Number(response.data.page) + 1)
        })
    }
    function onClickHandler() {
        getSearchList(Page)
    }
    console.log(List, "list")
    return (
        <div>
            {ModalInfo && (
                <ModalPop data={ModalInfo} onClose={closeHandler}></ModalPop>
            )}
            <h2>"{searchWord}"</h2>
            {List && (
                <InfiniteScroll
                    dataLength={List.length}
                    next={onClickHandler}
                    hasMore={true}
                >
                    <Row gutter={[16, 16]} className="search-movie-list">
                        {List.map(function (item, idx) {
                            if (
                                item.media_type === "movie" &&
                                item.poster_path
                            ) {
                                return (
                                    <Col
                                        className="list-item"
                                        key={idx}
                                        xs={12}
                                        sm={8}
                                        md={4}
                                        lg={4}
                                    >
                                        <div
                                            className="image-box"
                                            onClick={onClickDetailPage}
                                            data-id={item.id}
                                        >
                                            <strong className="tit-type">
                                                # {item.media_type}
                                            </strong>
                                            <img
                                                src={`${IMAGE_BASE_URL}w300/${item.poster_path}`}
                                                alt={item.title}
                                            ></img>
                                        </div>
                                    </Col>
                                )
                            } else if (
                                item.media_type === "person" &&
                                item.profile_path
                            ) {
                                return (
                                    <Col
                                        className="list-item"
                                        key={idx}
                                        xs={12}
                                        sm={8}
                                        md={4}
                                        lg={4}
                                    >
                                        <div
                                            className="image-box"
                                            onClick={function () {
                                                item.visible = true
                                                setModalInfo(item)
                                            }}
                                        >
                                            <strong className="tit-type">
                                                # {item.media_type}
                                            </strong>
                                            <img
                                                src={`${IMAGE_BASE_URL}w300/${item.profile_path}`}
                                                alt={item.title}
                                            ></img>
                                        </div>
                                    </Col>
                                )
                            }
                        })}
                    </Row>
                </InfiniteScroll>
            )}
            {/* <button type="button" className="btn" onClick={onClickHandler}>
                더보기
            </button> */}
        </div>
    )
}

export default withRouter(SearchPage)
