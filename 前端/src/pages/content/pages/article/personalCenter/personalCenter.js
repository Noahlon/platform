//导入功能
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import './personalCenter.css';
import common from "../../../../../utils/common";
import {HashRouter, Route, Switch} from "react-router-dom";
import CenterHead from "./centerHead";
import Collect from "./collect";
import MyLike from "./myLike";
import MyArticle from "./myArticle";
function All(props) {
    let [page, setPage] = useState()
    const [articles, setAticles] = useState([])
    useEffect(() => {
        let data = {
            limit: 6,
            page: page
        }
        axios.get(common.getUrl()+'api/post/my?token=' + window.localStorage.getItem("token"), data).then(res => {
            console.log("window.localStorage.getItem",window.localStorage.getItem('token'))
            if (window.localStorage.getItem("token") === null) {
                return null
            } else {
                // setAticles(res.data.data.postDtoList)
            }
        });
    }, [])
    //修改头像
    let [file, setFile] = useState([])

    return (
        <div>
            {
                articles.map((item, index) => {
                    return (
                        <div onClick={((e) => {
                        })} key={index} className={"article"}>
                            <div className={"article_list"}>
                                <div className={"left"}>
                                    <img style={{width: "60px",}} src={item.avatar}/>
                                </div>
                                <div className={"center"}>

                                    <div className={"center"}>
                                        <div className={"title"}>
                                            {item.post.title}
                                        </div>
                                        <div className={"info"}>
                                            级别{item.post.updatedAt}
                                        </div>
                                    </div>
                                </div>
                                <div className={"right"}>
                                    删除
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

function PersonalCenter(props) {
    //Effect parameter
    const [count, setCount] = useState(0);
    //data
    let data = {}
    //method
    let method = () => {
    }
    //Effect
    useEffect(() => {
    }, [count])
    return (
        <div>
            <CenterHead props={props}></CenterHead>
            <HashRouter>
                <Switch>
                    <Route  path={"/app/content/personalCenter/collect"} component={Collect}/>
                    <Route  path={"/app/content/personalCenter/like"} component={MyLike}/>
                    <Route  path={"/app/content/personalCenter/article"} component={MyArticle}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default PersonalCenter;
