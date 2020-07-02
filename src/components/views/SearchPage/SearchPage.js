/** @format */

import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config"
import Axios from "axios"
import { Collapse, Row, Col } from "antd"

const { Panel } = Collapse
function SearchPage(props) {
    const searchWord = props.match.params.searchWord
    const endpoint = `${API_URL}search/multi?query=${searchWord}&api_key=${API_KEY}&language=ko`
    const [List, setList] = useState("")
    useEffect(() => {
        Axios.get(endpoint).then(function (response) {
            setList(response.data.results)
        })
    }, [])
    return (
        <div>
            <h2>"{searchWord}"</h2>
            {List && (
                <Collapse defaultActiveKey={["1"]}>
                    <Panel header="MOVIES" key="1">
                        <Row gutter={[16, 24]} className="search-movie-list">
                            {List.map(function (item, idx) {
                                if (item.media_type == "movie") {
                                    console.log("type_movie", item)
                                    return (
                                        <Col
                                            className="list-item"
                                            key={idx}
                                            xs={12}
                                            sm={12}
                                            md={8}
                                            lg={6}
                                            xl={6}
                                            style={{
                                                backgroundImage: `${IMAGE_BASE_URL}w200/${item.poster_path}`,
                                            }}
                                        >
                                            {/* <div class="info-box">
                                            <h3 class="title">
                                                {item.title}(
                                                {item.original_title})
                                            </h3>
                                        </div> */}
                                        </Col>
                                    )
                                }
                            })}
                        </Row>
                    </Panel>
                    <Panel header="PERSON" key="2">
                        {List.map(function (item, idx) {
                            if (item.media_type == "person") {
                                console.log("type_person", item)
                                return (
                                    <div>
                                        <img
                                            src={`${IMAGE_BASE_URL}w200/${item.profile_path}`}
                                        ></img>
                                        <h3>{item.name}</h3>
                                        {item.known_for.map(function (
                                            item,
                                            idx
                                        ) {
                                            return <p>{item.title}</p>
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </Panel>
                </Collapse>
            )}
        </div>
    )
}

export default withRouter(SearchPage)
