/** @format */

import React from "react"

function Video(props) {
    return (
        <div className="vidio-box">
            {props.data.map(function (item, idx) {
                console.log("item: ", item, idx)
                return (
                    <iframe
                        width="400px"
                        height="200px"
                        src={`https://www.youtube.com/embed/${item.key}`}
                        title="W3Schools Free Online Web Tutorials"
                    ></iframe>
                )
            })}
        </div>
    )
}

export default Video
