/** @format */

import React, { useState } from "react"
import Axios from "axios"
import { withRouter } from "react-router-dom"
function RegisterPage(props) {
    const [IdCheck, setIdCheck] = useState(false)

    function onSubmitHandler(e) {
        e.preventDefault()
        var admId = e.target.id.value
        var admEmail = e.target.email.value
        var admName = e.target.name.value
        var admPw = e.target.password.value
        var admRePw = e.target.rePassword.value
        console.log("admId: ", admId, admEmail, admName, admPw, admRePw)

        // if (IdCheck === false) {
        //     return alert("아이디를 확인해 주세요.")
        // }

        // if (admPw.length < 5) {
        //     return alert("비밀번호를 5자 이상 입력 해 주세요")
        // } else {
        //     if (admPw !== admRePw) {
        //         return alert("비밀번호가 일치하지 않습니다.")
        //     }
        // }

        Axios.post("/admin/registProc", {
            admId,
            admEmail,
            admName,
            admPw,
        }).then(function (response) {
            console.log(response.data)
            if (response.data.result === 1) {
                props.history.push("/login")
            }
        })
    }

    function idCheck() {
        var admId = document.querySelector("#id").value
        if (admId.length < 5) {
            return alert("아이디를 5자 이상 입력 해 주세요")
        } else {
            Axios.post("/admin/idCheck", { admId }).then(function (response) {
                console.log(response.data)
                if (response.data.result === false) {
                    setIdCheck(true)
                    return alert("사용 가능한 아이디 입니다.")
                } else {
                    return alert("중복된 아이디 입니다.")
                }
            })
        }
    }

    return (
        <div>
            REGISTER_PAGE
            <form className="login-form" onSubmit={onSubmitHandler}>
                <input type="text" id="id" name="id" placeholder="ID"></input>
                <button type="button" className="btn" onClick={idCheck}>
                    중복체크
                </button>
                <input type="text" name="email" placeholder="EMAIL"></input>
                <input type="text" name="name" placeholder="NAME"></input>
                <input type="password" name="password" placeholder="PW"></input>
                <input
                    type="password"
                    name="rePassword"
                    placeholder="PW"
                ></input>
                <button type="submit" className="btn btn-login">
                    JOIN
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
