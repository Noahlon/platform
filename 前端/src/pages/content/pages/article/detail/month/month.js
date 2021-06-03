import React, {useEffect, useState, useCallback} from "react";
import activeFavorites from "../../../../../../imgs/activeFavorites.png";

import Favorites from "../../../../../../imgs/Favorites.png";
import {Link} from "react-router-dom";
import qs from 'qs'
import axios from "axios";
import common from "../../../../../../utils/common";
import  Like from "./../../../../../../imgs/like.png"
function Month(props) {
    const [content, setContent] = useState();
    const [sum, setSum] = useState();
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [img, setImg] = useState([activeFavorites])

    const [temp, setTemp] = useState([
        {
            a1: 1,

        },
        {
            a2: 2,
        }

    ])
    let temp1 = (value) => {
        value++
        setTimeout(() => {
            value === 10 ? console.log("正确") : temp1(value)
        }, 2000)

    }

    // 查看文章详情
    let id
    const [articles, setAticles] = useState([])

    //搜索

    // 获取文章列表
    useEffect(() => {
        let url
        let data


            url = common.getUrl() + "article/month/articles?limit=5" + "&page=" + page;

        axios.post(url,qs.stringify(data)).then(res => {
            if (res.data.code === "SUCCESS") {
                setTotal(res.data.data.articles)
                for (let i = 0; i < res.data.data.length; i++) {
                    res.data.data[i].img = Favorites
                }
                setAticles(res.data.data.articles || [])
                setTotal(res.data.data.allNum)
                setSum(res.data.data.allNum / 5)
                console.log(sum)
            } else {
                alert("添加失败" + res.data.message)
            }
        });
    }, [page])
    //收藏请求ajax
    let favorites = (articleId) => {

        let data = {
            articleId: articleId,
        }
        let url = common.getUrl() + "user/collect"
        console.log("token = " + window.localStorage.getItem("token"))


        axios.post(url + '?token=' + window.localStorage.getItem("token"), qs.stringify(data)).then(res => {
            console.log("收藏信息", res)

        });
    }

    //点赞
    let like = (id) =>{
        if (window.localStorage.getItem("token") === null){
            window.alert("登录后才可以点赞")
        }else{

            let data = {
                id: id,
            }
            let url = common.getUrl() + "article/like"
            axios.post(url + '?token=' + window.localStorage.getItem("token"), qs.stringify(data)).then(res => {

                window.alert(res.data.message)


            });
        }
    }
    return (
        <div>
            {
                articles.map((item, index) => {
                    return (
                        <div key={index + "div"} className={"article"}>
                            <div className={"article_list"}>
                                <div className={"left"}>
                                    <img style={{width: "60px",}} src={common.getUrl() + item.avatar}/>
                                </div>
                                <div className={"center"}>
                                    <div className={"center1"}>
                                        <Link key={index + "link"} to={"/app/content/detail/" + item.id}>
                                            <div style={{fontSize:"15px",fontWeight:"1000"}} className={"title"}>
                                                {item.title}`
                                            </div>
                                        </Link>
                                        <div style={{fontSize:"10px",fontWeight:"300"}}  className={"info"}>
                                            <span>
                                            {item.type == 0 ? "帖子" : "提问" }
                                            </span>
                                            <span style={{marginLeft:"10px"}}>
                                            {item.createTime.substring(0,10)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: "100px", left: "10px"}} className={"right"}>
                                    <img
                                        onClick={(e) => {
                                            item.img === activeFavorites ? item.img = Favorites : item.img = activeFavorites
                                            id = item.id
                                            //重新构建对象
                                            console.log(item.id)
                                            favorites(item.id);
                                            setAticles([...articles])
                                        }}
                                        style={{marginTop: "15px"}} width={"30px"} src={Favorites}/>
                                    <img
                                        onClick={(e) => {
                                            like(item.id)
                                        }}
                                        style={{marginTop: "15px",marginLeft:"20px"}} width={"30px"} src={Like}/>

                                </div>
                                <span  style={{lineHeight:"60px",height:"40px",fontSize:"15px",fontWeight:"300"}}>{item.likeNum}</span>
                            </div>
                        </div>

                    )
                })
            }
            <div className={"temp2"} style={{display: "flex"}}>
                <div>
                    <input
                        onClick={() => {
                            temp1(1)
                            setPage(page === 1 ? page : page - 1)
                        }}
                        className={"page"} type={"button"} value={"<上一页"}/>
                </div>
                <div>
                    <input
                        style={props.style}
                        onClick={() => {
                            setPage(page === 1 ? page : page - 1)
                        }}
                        type={"button"} value={page > 1 ? page - 1 : ""}/>
                </div>
                <div>
                    <input style={{backgroundColor: "#4e6ef2", color: "white"}} type={"button"} value={page}/>
                </div>
                <div>
                    <input
                        onClick={() => {
                            setPage(page + 1)
                        }}
                        type={"button"} value={page < sum ? page + 1 : ""}/>
                </div>
                <div>
                    <input
                        onClick={() => {
                            setPage(page < sum ? page + 1 : page)
                        }}
                        className={"page"} type={"button"} value={"下一页>"}/>
                </div>
                <div>
                    <input style={{width: "100px"}}
                           className={"page"} type={"button"} value={"共有" + total + "条"}/>
                </div>
            </div>
        </div>

    )
}

export default Month
