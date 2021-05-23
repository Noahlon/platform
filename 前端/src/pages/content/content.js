//导入功能
import React, {useState, useEffect,useContext} from 'react'
import axios from 'axios'
import {HashRouter, Switch, Route, Link, BrowserRouter} from "react-router-dom";

import {render} from "react-dom";
//css
import './content.css';
//package
import Article from "./pages/article/article";
import NewPost from './pages/article/newPost/newPost'
import common from "../../utils/common";
import Detail from "./pages/article/detail/detail";
import PersonalCenter from "./pages/article/personalCenter/personalCenter";
//img
import text from '../../imgs/text.png'
import video from '../../imgs/video.png'
import me from '../../imgs/me1.png'
import inputText from '../../imgs/writeDatabase.png'
import announcement from '../../imgs/announcement.png'
import dynamic from '../../imgs/dynamic.png'
import share from '../../imgs/share1.png'
import discuss from '../../imgs/commont.png'
import meWechat from '../../imgs/myHava.jpg'
import App, {MyContext} from "../../App";
import Head from "../head/head";
import Login from "../user/login/login";
import Register from "../user/register/register";
import * as url from "url";


function Right() {

    // console.log("temp.count",temp.count)
    return (
        <div className={"right"}>

            <div className={"personalCenter"}>
                <div className={"newPosts"}>
                    <Link to={"/app/content/newPost"}>
                    <img src={inputText}/>
                    <div>发布新帖</div>
                    </Link>
                </div>

                <div className={"newPosts"}>
                    <img src={video}/>
                    <div>发布视频</div>
                </div>
                <div className={"newPosts"}>
                    <img src={text}/>
                    <div>提问</div>
                </div>
                <Link to={"/app/content/personalCenter"}>
                <div className={"newPosts"}>
                    <img src={me}/>
                    <div>个人中心</div>
                </div>
                </Link>
            </div>
            <div className={"personalCenter margin_top10"}>
                <div className={"newPosts"}>
                    <img src={share}/>
                    <div>分享</div>
                </div>
                <div className={"newPosts"}>
                    <img src={discuss}/>
                    <div>讨论</div>
                </div>
                <div className={"newPosts"}>
                    <img src={announcement}/>
                    <div>公告</div>
                </div>
                <div className={"newPosts"}>
                    <img src={dynamic}/>
                    <div>动态</div>
                </div>
            </div>
            <div className={"personalCenter margin_top10"}>
                <span style={{padding: "50px 10px", fontWeight: "bold",}}>支持作者</span>
                <img src={meWechat}/>
            </div>
            <div className={"personalCenter 广告"}>
                <span>广告</span>
            </div>
            <div className={"personalCenter 广告"}>
                <span>广告</span>
            </div>
            <div className={"personalCenter 广告"}>
                <span>广告</span>
            </div>
            <div className={"personalCenter 广告"}>
                <span>广告</span>
            </div>
            <div className={"personalCenter 广告"}>
                <span>广告</span>
            </div>

        </div>
    )
}

function Content(props) {
    return (
<>
    <Head onClick ={()=>{

        console.log("hello")

    }} props = {props} />
    <br/>
    <br/>
    <br/>
        <div className={"content"}>

            <div className={"left"}>
                <HashRouter>
                    <Switch>
                        <Route  path={"/app/content/personalCenter"} component={PersonalCenter}/>
                        <Route  path={"/app/content/detail/:id"} component={Detail}/>
                        <Route  path={"/app/content/newPost"} component={NewPost}/>
                        <Route  path={"/app/content/article"} component={Article}/>
                    </Switch>
                </HashRouter>
            </div>
            <Right></Right>
        </div>
</>

    )
}
export default Content;