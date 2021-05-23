//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route,Link} from "react-router-dom";
import {render} from "react-dom";
import common from "../../../../../../utils/common";
//css
//package
//img
function Week(props) {
    let detail = (e) => {
        (props.history.push("/app/content/detail"))
    }
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
    const [articles, setAticles] = useState([])
    useEffect(() => {
        axios.get('http://192.168.1.254:8081/api/post/week').then(res => {
            console.log(res)
            setAticles(res.data.data)
        });
    }, [])
    return (
        articles.map((item, index) => {
            return (
                <div onClick={((e)=>{
                    detail(item)
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
                            详情
                        </div>
                    </div>
                </div>
            )
        })
    )
}


export default Week;
