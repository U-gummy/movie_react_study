/** @format */

import React from "react"

function Video(props) {
    return (
        <div className="vidio-box">
            {props.data.map(function (item, idx) {
                console.log("item: ", item, idx)
                return (
                    <iframe
                        src={`https://www.youtube.com/embed/${item.key}`}
                    ></iframe>
                )
            })}
        </div>
    )
}

export default Video
