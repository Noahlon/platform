//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'

//css
import './detail.css';
import common from "../../../../../utils/common";
//package
//img
import comment from '../../../../../imgs/commont.png'
import collect from '../../../../../imgs/CollectionHollow.png'
import {Link} from "react-router-dom";
import activeFavorites from "../../../../../imgs/activeFavorites.png";
import Favorites from "../../../../../imgs/Favorites.png";
import axios from "axios";

const initialPost = {
    avatar: "",
    level: 0,
    nickname: "",
    post: {id: "", parentId: "", userId: "", title: "", content: "", recommend: ""},
    userId: 22,
    username: "",
}

function Detail(props) {
    // 文章id
    console.log("来到了id")
    console.log("id", props.match.params.id)
    const [id,setId] = useState(props.match.params.id)
    const [replyList, setReplyList] = useState([])
    const [content, setContent] = useState([])
    let [post, setPost] = useState(initialPost);
    //更换页面
    const [replacePage, setReplacePage] = useState(0)
    // 通过id获取文章
    let getPost = (id) => {
        axios.post(common.getUrl()+'article/detail/' +id+ '?token=' + window.localStorage.getItem("token")).then(res => {
            console.log(res.data.data)
            setPost(res.data.data)
            // post = {...res.data.data}
            // setPost({...post})
            // setReplyList(res.data.data)

        });
        let url=common.getUrl()+'sys/replyList/' +id+ '?token=' + window.localStorage.getItem("token")
        axios.post(url).then(res =>{
            setReplyList(res.data.data)
        })

    }
    useEffect(() => {
        getPost(id)
    }, [id,replacePage])
    let changeConten = () => {
        let data = {
            receiveArticle:id,
            content:content
        }
        console.log("id", id)
        console.log("content", content)
        let url = common.getUrl()+"sys/reply/?"+'token=' + window.localStorage.getItem("token")
        axios.post(url,qs.stringify(data)).then(res => {
            console.log(res.data.data)
            console.log("提交的响应数据", res)
            alert("回复成功")
            setReplacePage(0)
        });

    }
    return (
        <div style={{marginTop: "20px"}} key={post.id} className={"detail"}>
            <div className={"label"}>
                <div>新闻</div>
                <div>新闻</div>
                <div>新闻</div>
            </div>
            <div className={"top"}>
                <div
                    onClick={() => {
                        setReplacePage(0)
                    }}
                >{post.title}</div>
            </div>
            <div className={"button"}>
                <input
                    style={{outline: "none"}}
                    type={"button"} value={"关注问题"}></input>
                <input
                    onClick={() => {
                        setReplacePage(1)
                    }}
                    style={{outline: "none"}}
                    type={"button"} value={"回复问题"}></input>
                <div className={"content_last"}>
                    <div className={"contents"}>

                        <img
                            onClick={() => {
                                setReplacePage(2)
                            }}
                            width={"30px"} src={comment}/>
                        <div>
                            {post.commentNum}
                            条评论
                        </div>
                    </div>
                    <div className={"contents"}>
                        <img width={"30px"} src={collect}/>
                        <div>
                            {post.collectionNum}
                            条收藏</div>
                    </div>

                </div>
            </div>
            <div className={"temp1"}></div>
            <div className={"temp"}></div>

            {/*更换层*/}
            <div className={"text"}>
                {/*context层*/}
                <div className={"text_top_top"} style={{display: replacePage === 0 ? "flex" : "none"}}>
                    <img width={"38px"} height={"38px"} src={common.getUrl()+post.userAvatar}/>
                    <div className={"text_top"}>
                        <span>{post.nickname}</span>
                        <p>{post.username}</p>
                    </div>
                </div>
                <div style={{display: replacePage === 0 ? "flex" : "none"}} className={"text_center"}>
                <span style={{lineHeight: "30px", fontSize: "15px", color: '#121212',}}>
                    {post.content}
                </span>
                </div>
            </div>

            {/*// 回复层*/}
            <div className={"text_top_top"} style={{display: replacePage === 1 ? "" : "none"}}>
                <textarea value={content}
                          onInput={(e) => {
                              setContent(e.target.value)
                          }}
                          style={{
                              width: "80%",
                              height: "400px",
                              marginLeft: "10%",
                              marginTop: "20px",
                              outline: "none",
                              border: 'none',
                              lineHeight: '30px'
                          }} placeholder={"请输入评论内容"}/>
                <div>

                    <button style={{
                        width: "100px",
                        marginLeft: "50px",
                        borderRadius: "5px",
                        outline: "none",
                        border: "none",
                        backgroundColor: "rgb(0, 102, 255)",
                        color: "white",
                        height: "30px",
                        lineHeight: "30px",
                    }}
                            onClick={() => {
                                changeConten()
                                setContent("")
                            }}
                    >提交
                    </button>
                </div>
            </div>

            {/*评论层*/}
            <div className={"text_top_top"} style={{display: replacePage === 2 ? "" : "none"}}>
                评论
                {
                    replyList.map((item, index) => {
                        return (
                            <div key={index + "div"} className={"article"}>
                                <div className={"article_list"}>
                                    <div className={"left"}>
                                        <img style={{width: "60px",}} src={item.userAvatar}/>
                                    </div>
                                    <div>
                                        <div style={{display: "flex"}}>
                                            {/*<Link key={index + "link1"} to={"/app/content/detail/" + item.post.id}>*/}
                                                <div
                                                    onClick={()=>{
                                                        setId(item.id)
                                                        props.history.push("/app/content/detail/"+ item.id)
                                                    }}
                                                    style={{paddingLeft: "10px"}}>

                                                </div>
                                                {/*</Link>*/}
                                            <div style={{paddingLeft: "10px"}}>
                                                level


                                            </div>
                                            <div style={{paddingLeft: "10px"}}>
                                                {
                                                    item.createTime
                                                }
                                            </div>
                                        </div>
                                        <div style={{marginTop: "20px"}}>
                                            {item.content}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                    }
                    </div>
                    </div>
                    )
                }

export default Detail
