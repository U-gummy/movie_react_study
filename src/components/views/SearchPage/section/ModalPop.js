/** @format */

import React, { useState, useEffect } from "react"
import { Modal, Row, Col } from "antd"
import { IMAGE_BASE_URL } from "../../../Config"
import { withRouter } from "react-router-dom"
function ModalPop(props) {
    const [Visible, setVisible] = useState(props.data.visible)
    function onClickDetailPage(e) {
        props.history.push(`/detail/${e.target.parentNode.dataset.id}`)
        window.location.reload()
    }
    function handleCancel(e) {
        setVisible(false)
        props.onClose()
    }

    return (
        <Modal
            title={props.data.name}
            visible={Visible}
            footer={null}
            onCancel={handleCancel}
        >
            <Row gutter={[16, 16]} className="search-movie-list">
                {props.data.known_for.map(function (item, i) {
                    if (item.media_type == "movie" && item.poster_path) {
                        return (
                            <Col className="list-item" key={i} span={8}>
                                <div
                                    className="image-box"
                                    data-id={item.id}
                                    onClick={onClickDetailPage}
                                >
                                    <img
                                        src={`${IMAGE_BASE_URL}w300/${item.poster_path}`}
                                    ></img>
                                </div>
                            </Col>
                        )
                    }
                })}
            </Row>
        </Modal>
    )
}

export default withRouter(ModalPop)
