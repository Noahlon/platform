//导入功能
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import qs from 'qs'
import {HashRouter, Switch, Route,Link} from "react-router-dom";
import {render} from "react-dom";
//css
import './newPost.css';
import common from "../../../../../utils/common";
//package
//img

function Time(){

    return(
        <div className={"timeChoice"}>
            <div className={"all"}>综合</div>
            <div className={"week"}>周榜</div>
            <div className={"month"}>月榜</div>
            <div className={"essence"}>精华</div>
        </div>
    )
}



function Aticles (props){
    let [item,setItem] = useState("")
    let [context,setcontext] = useState([])
    let [button,setbutton] = useState([])
    let buttons=()=>{
        let data ={
            title:item,
            content:context,
        }
        let url =common.getUrl()+'article/addArticle?token='+window.localStorage.getItem("token");
        axios.post(url,qs.stringify(data)).then(res => {
            console.log("新增信息",res)
            if (res.data.code === "SUCCESS") {
                alert("新增成功")
                console.log("添加成功")
                props.props.history.push("/app/content/article/all")
            }else {
                alert("添加失败"+res.data.message)
            }
        });
    }
    return (
        <div className={"newPost"}>
            <div className={"all"}>发布新帖</div>
            <div className={"item"}>
                <input style={{height:"30px",width:"500%",outline:"none",border:"none"}} placeholder={"请输入题目"}
                    onInput={(e)=>{
                        setItem(e.target.value)
                    }}
                />
            </div>
            <div className={"context"}>
                <textarea
                    onInput={(e)=>{
                        setcontext(e.target.value)
                    }}
                    style={{height:"400px",width:"600%",outline:"none",borderColor:"#f6f6f6"}} placeholder={"请输入内容"}></textarea>
            </div>


            <div>
                <input className={"button"} type={"button"} value={"提交"} style={{marginTop:"400px",height:"30px",backgroundColor:"#06f",
                    lineHeight:"30px", color:"white",outline:"none",border:"none",borderRadius:"5px",}}
                       onClick={buttons}
                />
            </div>
        </div>

    )
}
function NewPost(props) {
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
    return(
        <Aticles props={props}></Aticles>
    )
}

export default NewPost
