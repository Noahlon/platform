//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import {render} from "react-dom";
//css
import './login.css';
//package
import common from "../../../utils/common";
//img
function Register(props) {
    //Effect parameter
    //底部按钮
    const [buttonValue, setValue] = useState("登录");
    const [login, setLogin] = useState([]);
    const [strName, setStrName] = useState("请输入账号")
    const [strPassWord,setStrPassWord] = useState("请输入密码")
    const [name, setName] = useState([])
    const [password, setPassWord] = useState([])
    useEffect(() => {
        console.log(login)
    }, [login])
    console.log(login)
    useEffect(() => {
        console.log(login)
    }, [buttonValue])
    //data
    let data = {
        username:name,
        password:password,
    }

    //method
    let submit = (e) => {

        {
            axios.post(common.getUrl()+'user/login', qs.stringify(data)).then(res => {
                console.log(res)
                if (res.data.code === "SUCCESS") {
                    console.log(res)
                    window.localStorage.setItem("token", res.data.data)

                    alert("登陆陈工")
                    props.history.push("/app/content/article/all")
                }
                setLogin(res.data.message)
            });
        }

    }

    //Effect
    return (
        <div className={"login"}>
            <div className={"logo"}>
                <span>学坝</span>
            </div>
            <div className={"logo_Bottom"}>
                为了孩子们的梦想
            </div>
            <br/>
            <div className={"mainBody"}>
                <div className={"border"}>
                        <div className={"login_text active"}>登录</div>
                    <Link to={"/register"}>
                    <div className={"register_text"}>注册</div>
                    </Link>
                </div>

                <div className={"mainInput"}>

                    <input placeholder={strName}
                           onBlur={(e) => {
                               e.target.classList.add('your-class');

                               if (e.target.placeholder === "请输入账号") {
                                   setStrName("账号不能为空")
                               }
                           }}
                           onInput={(e) => {
                               setName(
                                   e.target.value
                               )
                           }}
                           className={"input text_name"}/>
                    <input
                        onBlur={(e) => {
                            e.target.classList.add('your-class');
                            if (e.target.placeholder === "请输入密码") {
                                setStrPassWord("密码不能为空")
                            }

                        }}
                        onInput={(e) => {
                            setPassWord(
                                e.target.value
                            )
                        }}
                        placeholder={strPassWord} type={"password"} className={"input password"}/>
                    <p style={{color:"red",textIndent:"40px",fontSize:"5px"}}>{login}</p>
                    <input onClick={(e) => {
                        submit()
                        // e.target
                    }} value={buttonValue} type={"button"} className={"input button"}/>
                </div>
            </div>

            <HashRouter>
                <Switch>
                    {/*<Route exact path={"/Temp1"} component={Temp1}/>*/}
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Register;
