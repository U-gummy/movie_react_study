/** @format */

import React, { useState, useEffect } from "react"
import Axios from "axios"
import { withRouter } from "react-router-dom"
export default function (Component, option) {
    function GetUserInfo(props) {
        useEffect(() => {
            Axios.get("/admin/auth")
                .then(function (response) {
                    return response.data.result
                })
                .then(function (result) {
                    if (result) {
                        // 로그인 한 사용자
                        if (option === false) {
                            props.history.push("/")
                        }
                    } else {
                        // 로그인 안한 사용자
                        if (option === true) {
                            props.history.push("/login")
                        }
                    }
                })
        }, [])
        return <Component {...props} />
    }

    return withRouter(GetUserInfo)
}
