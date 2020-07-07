/** @format */

import React from "react"

function Video(props) {
    return (
        <div className="vidio-box">
            {props.data.map(function (item, idx) {
                return (
                    <iframe
                        key={idx}
                        src={`https://www.youtube.com/embed/${item.key}`}
                    ></iframe>
                )
            })}
        </div>
    )
}

export default Video
