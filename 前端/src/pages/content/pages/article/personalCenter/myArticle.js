//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route,Link} from "react-router-dom";
import {render} from "react-dom";
import activeFavorites from "../../../../../imgs/activeFavorites.png";
import common from "../../../../../utils/common";
import Favorites from "../../../../../imgs/Favorites.png";
import Like from "../../../../../imgs/like.png";
//css
//package
//img
function MyArticle(props) {
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
        url = common.getUrl() + "article/my/article?token=";

        axios.get(url + window.localStorage.getItem("token")).then(res => {
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
        </div>

    )
}

export default MyArticle;
