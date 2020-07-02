/** @format */

import React from "react"
import { IMAGE_BASE_URL } from "../../../Config"
import { List, Avatar, Collapse } from "antd"

const { Panel } = Collapse
function Cast(props) {
    console.log("cast.......", props.data)
    function getList(data) {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => {
                    if (item.profile_path) {
                        return (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            src={`${IMAGE_BASE_URL}w300/${item.profile_path}`}
                                        />
                                    }
                                    title={item.name}
                                    description={
                                        item.character
                                            ? item.character
                                            : item.job
                                    }
                                />
                            </List.Item>
                        )
                    }
                }}
            />
        )
    }

    return (
        <div className="cast-info-content">
            <Collapse defaultActiveKey={["1"]}>
                <Panel header="cast" key="1">
                    {getList(props.data.cast)}
                </Panel>
                <Panel header="crew" key="2">
                    {getList(props.data.crew)}
                </Panel>
            </Collapse>
        </div>
    )
}

export default Cast
