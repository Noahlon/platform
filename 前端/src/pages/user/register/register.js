//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import {render} from "react-dom";
//css
import './register.css';
import common from "../../../utils/common";
//package
//img
function Login(props) {
    //Effect parameter
    //底部按钮
    const [buttonValue, setValue] = useState("注册");
    const [login, setLogin] = useState([]);

    const [strNickname, setStrNickname] = useState("请输入昵称")
    const [strName, setStrName] = useState("请输入账号")
    const [strPassWord, setStrPassWord] = useState("请输入密码")

    const [nickName, setNickName] = useState([])
    const [name, setName] = useState([])
    const [password, setPassWord] = useState([])


    useEffect(() => {
        console.log(login)
    }, [buttonValue])
    //data
    //method
    let submit = (e) => {
        console.log(name,nickName,password)
        let data = {
            username:name,
            nickname:nickName,
            password:password,
        }
        let url = common.getUrl()+'user/register'
            axios.post(url,qs.stringify(data)).then(res => {
                console.log(res)
                if (res.data.code === "SUCCESS"){
                    props.history.push("/app/content/article")
                    window.localStorage.setItem("token",res.data.data)
                }
                setLogin(res.data.message)
            });
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
                    <Link to={"/login"}>
                        <div style={{cursor:"pointer"}} className={"login_text"}>登录</div>
                    </Link>
                    <div  className={"register_text active"}>注册</div>
                </div>

                <div className={"mainInput"}>
                    <input
                        onBlur={(e) => {
                            e.target.classList.add('your-class');
                            if (!e.target.value) {
                                setStrNickname("昵称不能为空")
                            }
                        }}
                        onInput={(e) => {
                            setNickName(
                                e.target.value
                            )
                        }}
                        style={{marginBottom: "30px"}} placeholder={strNickname} className={"input text_name"}/>
                    <input placeholder={strName}
                           onBlur={(e) => {
                               e.target.classList.add('your-class');
                               if (!e.target.value) {
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
                            if (!e.target.value) {
                                setStrPassWord("密码不能为空")
                            }
                        }}
                        onInput={(e) => {
                            setPassWord(
                                e.target.value
                            )
                        }}
                        placeholder={strPassWord} type={"password"} className={"input password"}/>
                    <p style={{color: "red", textIndent: "40px", fontSize: "5px"}}>{login}</p>
                    <input style={{cursor:"pointer"}} onClick={(e) => {
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

export default Login;
