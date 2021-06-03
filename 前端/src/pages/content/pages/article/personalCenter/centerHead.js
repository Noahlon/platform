import React, {useEffect, useRef, useState} from "react";
import avatars from "../../../../../imgs/5.jpeg";
import axios from "axios";
import common from "../../../../../utils/common";
import {Link} from "react-router-dom";

function CenterHead(props) {
    const [articles,setArticles] = useState()
    const [postImg,setPostImg] = useState()
    const [nickname,setName] = useState()
    const [username,setUsername] = useState()
    let [avatar, setAvatar] = useState(avatars)
    let nacs = useRef(null)
    let [nav, setNav] = useState(0)
    // useEffect(()=>{
    //     axios.get(common.getUrl()+'user/whoami?token=' + window.localStorage.getItem("token")).then(res => {
    //         setAvatar(common.getUrl()+res.data.data.userAvatar)
    //         setUsername(res.data.data.username)
    //         setName(res.data.data.username)
    //     });
    //     let url =common.getUrl()+'article/myList?token='+window.localStorage.getItem("token");
    //     axios.get(url).then(res=>{
    //         console.log("mylist="+res.data.data)
    //         setArticles(res.data.data)
    //     })
    // },[])
    // useEffect(()=>{
    //     let formData = new FormData();
    //     formData.append("file", postImg)
    //     let url =common.getUrl()+'user/uploadAvatar/?token='+window.localStorage.getItem("token");
    //     axios.post(url,formData).then(res=>{
    //
    //         console.log("上传信息="+res.data.data)
    //     })
    // },[postImg])
    return (
        <div className={"timeChoice"}>
            <div
                onClick={(e) => {
                    setNav(0)
                        props.props.history.push("/app/content/personalCenter/article")
                }}
                style={{width: "64px"}} className={"all " + (nav === 0 ? "changeNav" : "")}>我的主页
            </div>

            <div
                onClick={(e) => {
                    setNav(1)
                    props.props.history.push("/app/content/personalCenter/collect")

                }}
                style={{width: "64px"}} className={"week " + (nav === 1 ? "changeNav" : "")}>我的收藏
            </div>
            <div
                onClick={(e) => {
                    setNav(2)
                    props.props.history.push("/app/content/personalCenter/like")

                }}
                style={{width: "64px"}} className={"month " + (nav === 2 ? "changeNav" : "")}>我的点赞
            </div>


            <div
                onClick={(e) => {
                    setNav(3)
                    // props.props.history.push("/app/content/personalCenter/article")
                    window.alert("等待开发,功能完善中")

                }}
                style={{width: "64px"}} className={"essence " + (nav === 3 ? "changeNav" : "")}>个人信息
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
        </div>
    )
}
export default CenterHead