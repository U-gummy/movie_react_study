/** @format */

import React from "react"
import MovieList from "../../LanderPage/section/MovieList"
import { Row, Col } from "antd"
function SimilarMovies(props) {
    return (
        <div>
            <Row gutter={[16, 24]}>
                {props.data.results &&
                    props.data.results.map(function (item, idx) {
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
        </div>
    )
}

export default SimilarMovies
