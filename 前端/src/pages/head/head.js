//导入功能
import React, {useState, useEffect, useContext} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import {render} from "react-dom";
//css
import './index_head.css';
//package
import All from "../content/pages/article/all/all";
//img
import temp from '../../imgs/5.jpeg'
import itnova from '../../imgs/itnova.png'
import my from '../../imgs/me.png'
import dialogue from '../../imgs/dialog.png'
import bell from '../../imgs/bell.png'
import common from "../../utils/common";

function Head(props) {
    const [loginImg, setLogInImg] = useState(my)
    const [text, setText] = useState('')
    //更改用户图片
    let getImg = () => {
        axios.get(common.getUrl() + 'user/whoami?token=' + window.localStorage.getItem("token")).then(res => {
            setLogInImg(common.getUrl() + res.data.data.userAvatar)
        });
    }
    //Effect parameter
    useEffect(() => {
        // console.log(props)
        if (window.localStorage.getItem("token") === null) {
            console.log("setLogiMG", loginImg)
            setLogInImg(my)
        } else {
            getImg()
        }
    }, [])

    const [count, setCount] = useState(0);
    //data
    let data = {}
    //method
    let method = () => {
    }

    //Effect
    useEffect(() => {
    }, [count])
    let [nav, setNav] = useState(0)
    return (
        <div  style={{whiteSpace: "nowrap",}} className={"index_top"}>
            <div className={"head"}>
                <div className={"left"}>
                    {/*<img style={{width:"50px"}} src={itnova}/>*/}
                    <Link to={"/app/content/article/all"}>
                        <div
                            onClick={()=>{
                                setTimeout(()=>{
                                window.location.reload()
                                },100)
                            }}
                            id={"xueba"} className={"left_element"}>知一
                        </div>
                    </Link>
                    <Link to={"/app/content/article/all"}>
                        <div style={{paddingBottom: "13px"}} className={"left_element"}>首页</div>
                    </Link>
                    <div className={"left_element"}>加入学坝</div>
                    <div className={"left_element"}>走进学坝</div>
                    <div className={"left_element"}>关于学坝</div>

                </div>
                <div id={"submit"} className={"center"}>
                    <input
                        onChange={(e) => {
                            setText(e.target.value)
                            common.setContent(e.target.value)
                            props.props.history.push("app/content/article/week")

                        }}
                        className={"input"} value={text} placeholder={"noah home"}/>

                    <Link to={"/app/content/article/all"}>

                        <input
                            onClick={() => {
                                // common.setContent(text)
                                // setTimeout(()=>{
                                //     props.props.history.push("app/content/article/week")
                                // },1000)
                                setTimeout(()=>{
                                    setText("")
                                    common.setContent(null)
                                },500)

                            }}
                            className={"button"} value={"提交"} type={"button"}/>
                    </Link>
                </div>
                <div className={"right"}>
                    <Link to={window.localStorage.getItem("token") === null ? "/login" : "/app/content/personalCenter"}>
                        <img
                            src={loginImg}/>

                    </Link>
                    <img src={dialogue}/>
                    <img src={bell}/>
                </div>
            </div>
        </div>
    )
}

export default Head;
