//导入功能
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import qs from 'qs'


//css
import './personalCenter.css';

//img
import avatars from './../../../../../imgs/5.jpeg'
import {Link} from "react-router-dom";
import activeFavorites from "../../../../../imgs/activeFavorites.png";
import Favorites from "../../../../../imgs/Favorites.png";
import * as url from "url";
import common from "../../../../../utils/common";
function Nav(props) {
    const [articles,setArticles] = useState()
    const [postImg,setPostImg] = useState()
    let [avatar, setAvatar] = useState(avatars)
    let nacs = useRef(null)
    let [nav, setNav] = useState(0)
    useEffect(()=>{
        axios.get(common.getUrl()+'user/whoami?token=' + window.localStorage.getItem("token")).then(res => {
            setAvatar(res.data.data.userAvatar)
        });
        let url =common.getUrl()+'article/myList?token='+window.localStorage.getItem("token");
        axios.get(url).then(res=>{
            console.log("mylist="+res.data.data)
            setArticles(res.data.data)
        })
    },[])
    useEffect(()=>{
        let formData = new FormData();
        formData.append("file", postImg)
        let url =common.getUrl()+'user/uploadAvatar/?token='+window.localStorage.getItem("token");
        axios.post(url,formData).then(res=>{

            console.log("上传信息="+res.data.data)


        })
    },[postImg])
    return (
        <div className={"timeChoice"}>
            <div
                onClick={(e) => {
                    setNav(0)
                }}
                style={{width: "64px"}} className={"all " + (nav === 0 ? "changeNav" : "")}>我的主页
            </div>
            <div
                onClick={(e) => {
                    setNav(1)
                }}
                style={{width: "64px"}} className={"week " + (nav === 1 ? "changeNav" : "")}>我的帖子
            </div>
            <div
                onClick={(e) => {
                    setNav(2)
                }}
                style={{width: "64px"}} className={"month " + (nav === 2 ? "changeNav" : "")}>上传头像
            </div>
            <div
                onClick={(e) => {
                    setNav(3)
                }}
                style={{width: "64px"}} className={"essence " + (nav === 3 ? "changeNav" : "")}>我的收藏
            </div>
            <div
                onClick={(e) => {
                    setNav(4)
                    window.localStorage.removeItem("token")
                    alert("退出成功")
                    props.props.history.push("/login/")
                }}
                style={{width: "64px"}} className={"essence " + (nav === 4 ? "changeNav" : "")}>退出
            </div>



                <div style={{position:"absolute",top:"170px"}}>
                {/*我的主页*/}
                <div style={{display: nav  == 0 ?"block" :"none" ,width:"100%",}}>
                    <div>
                        <div style={{}}>
                            <img   style={{width:"100px",height:"100px"}} src={avatar}/>
                        </div>
                        <div style={{position:"absolute",top:"0px",left:"300px"}}>
                            <div>
                                nickname
                            </div>
                            <div>
                                username
                            </div>
                        </div>



                    </div>

                </div>
                <div style={{display: nav  == 1 ?"block" :"none" }}>
                    我的帖子
                    {/*自己帖子列表*/}


                    <div>
                        <div>
                            <img style={{width:"80px",height:"80px"}} src={avatar} />
                        </div>
                        <div>
                            <div>
                                nickname
                            </div>
                            <div>
                                username
                            </div>

                        </div>
                    </div>

                </div>


                    <div style={{display: nav  == 2?"block" :"none" }}>
                        上传头像
                        <input
                            onChange={(e)=>{
                                console.log(e.target.files[0])
                                setPostImg(e.target.files[0])
                            }}
                            style={{width:"250%",position:"absolute",top:"20px"}} type={"file"}  />

                    {/*<button style={{width:"80px",height:"30px",lineHeight:"30px"}}*/}
                    {/*        onClick={(e)=>{*/}
                    {/*            console.log(e.target)*/}
                    {/*        }}*/}
                    {/*>提交</button>*/}
                </div>
                <div style={{display: nav  == 3 ?"block" :"none" }}>
                    我的收藏
                </div>
            </div>

        </div>
    )
}

function All(props) {
    let sum = 30
    let [total, settotal] = useState(0)
    const [state,setState] = useState(1); //调整页面
    let [page, setPage] = useState(1)
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


    function upload() {
        let formData = new FormData();
        formData.append("avatar", file)
        axios.post('http://xueba.it266.com:8081/user/uploadAvatar?token=' +window.localStorage.getItem("token"))
            .then(res => {
                console.log(res)
                if (res.data.code === 'SUCCESS') {

                } else {
                    alert('错误')
                }
            })
    }
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

                                    <div className={"center1"}>
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
            <Nav props={props}></Nav>
            <All props={props}></All>

        </div>
    )
}

export default PersonalCenter;
