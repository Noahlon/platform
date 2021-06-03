import inputText from "../../imgs/writeDatabase.png";
import video from "../../imgs/video.png";
import {Link} from "react-router-dom";
import text from "../../imgs/text.png";
import me from "../../imgs/me1.png";
import share from "../../imgs/share1.png";
import discuss from "../../imgs/commont.png";
import announcement from "../../imgs/announcement.png";
import dynamic from "../../imgs/dynamic.png";
import meWechat from "../../imgs/myHava.jpg";
import React from "react";

function Right(props) {
    return (
        <div className={"right"}>

            <div className={"personalCenter"}>
                <div onClick={() => {
                    if (window.localStorage.getItem("token") === null) {
                        window.alert("请登录")
                    } else {
                        props.props.history.push("/app/content/newPost")
                    }
                }} className={"newPosts"}>
                    {/*<Link to={"/app/content/newPost"}>*/}
                    <img alt={"输入信息"} src={inputText}/>
                    <div>发布新帖</div>
                    {/*</Link>*/}
                </div>

                <div className={"newPosts"}>
                    <img alt={"发布视频"} src={video}/>
                    <div>发布视频</div>
                </div>
                <div
                    onClick={() => {
                        if (window.localStorage.getItem("token") === null) {
                            window.alert("请登录")
                        } else {
                            props.props.history.push("/app/content/newProblem")
                        }
                    }}
                    className={"newPosts"}>
                        <img alt={"new question"} src={text}/>
                        <div>提问</div>
                </div>
                    <div
                        onClick={() => {
                            if (window.localStorage.getItem("token") === null) {
                                window.alert("请登录")
                            } else {
                                props.props.history.push("/app/content/personalCenter/article")
                            }
                        }}

                        className={"newPosts"}>
                        <img src={me}/>
                        <div>个人中心</div>
                    </div>
            </div>
            <div className={"personalCenter margin_top10"}>
                <div className={"newPosts"}>
                    <img alt={"share"} src={share}/>
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
            <div style={{width:"350px"}} className={"personalCenter 广告"}>
                <a style={{width:"350px"}} href={"https://beian.miit.gov.cn"}>豫ICP备2021015232号</a>
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

export default Right