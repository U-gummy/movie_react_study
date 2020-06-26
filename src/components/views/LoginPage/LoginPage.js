/** @format */

import React from "react"
import { Link, withRouter } from "react-router-dom"
import Axios from "axios"
// 2번
// var submitHandler = function(){}
//3번
// const submitHandler = () =>{}

function LoginPage(props) {
    function onSubmitHandler(e) {
        e.preventDefault()
        var admId = e.target.email.value
        var admPw = e.target.password.value

        Axios.post("/admin/loginProc", { admId, admPw }).then(function (
            response
        ) {
            console.log(response)
            if (
                response.data.code === 0 &&
                response.data.result.isLoginSuccess
            ) {
                props.history.push("/")
            } else {
                alert("로그인에 실패하였습니다.")
            }
        })
    }

    return (
        <div>
            LOGIN_PAGE
            <form className="login-form" onSubmit={onSubmitHandler}>
                <input type="text" name="email" placeholder="EMAIL"></input>
                <input type="password" name="password" placeholder="PW"></input>
                <button type="submit" className="btn btn-login">
                    LOGIN
                </button>
                <Link to="/register">
                    <button type="button" className="btn btn-join">
                        JOIN
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
