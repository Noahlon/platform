//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import {render} from "react-dom";
//css
import './App.css';
//package
//img
import search from './imgs/search.png'
import empty from './imgs/search.png'
import leftArrow from './imgs/leftArrow.png'
import rightArrow from './imgs/rightArrow.png'

function App(props) {
    //Effect parameter
    const [count, setCount] = useState(2);
    const [books, setBooks] = useState([])
    // 开启细节
    const [isDetail, setIsDetail] = useState(true)
    // 是否开启
    const [isNewPost, setNewPost] = useState(true)
    //细节存储位置
    const [details, setDetails] = useState([])
    //new post
    const [title,setTitle] = useState([])
    const [content,setContent] = useState([])
    //data
    let data = {}
    //method
    let method = () => {
    }
    //Effect
    useEffect(() => {
        console.log("count = " , count)
        listBook();
    }, [count])
    //获取细节
    let detail = (id) => {
        let url = 'http://localhost:8081/books/' + id;
        axios.get(url).then((res => {
            setDetails(res.data.data)
            setTitle(res.data.data.bookName)
        }))
    }
    //更新数据
    let updata = (id) => {
        let data = {
            bookName: title,
            describe:content,

        }

        let url = 'http://localhost:8081/books/' + id;
        axios.post(url,data).then((res => {
        }))
    }
    // 删除
    let deleteMethod = (id) => {
        let url = 'http://localhost:8081/books/' + id;
        axios.delete(url).then(res => {
            if (res.data.code === "SUCCESS") {
                alert("删除成功")
                console.log("删除成功")
            } else {
                alert("删除失败" + res.data.message)
            }
            listBook();
        });
    }

    //创建书籍
    let creatBook = ()=>{
        let data = {
            isbn:"20001111",
            bookName:title,
            price:content,
        }
        let url = 'http://localhost:8081/books/'
        axios.post(url,qs.stringify(data)).then(res => {
            console.log(res)
        });
    }
    //拉取列表
    let listBook = () => {
        let data = {
            page: count,
            limit: 5,
        }
        let url = 'http://localhost:8081/books/?page=' + data.page + '&limit=' + data.limit
        axios.get(url).then(res => {
            console.log(res.data.book)
            setBooks(res.data.book)
        });
    }
    return (
        <div style={{width: "60%", height: "600px", margin: "0 auto", marginTop: "50px", border: "red 1px solid"}}>
            {/*头部*/}
            <div style={{height: "40px"}} className={"title"}>
                <div style={{float: "left", fontSize: "25px"}}>
                    图书管理
                </div>
                <div style={{float: "right"}}>
                    <button
                        onClick={()=>{
                            setNewPost(false)
                        }}
                        style={{width: "50px"}}>+新增</button>
                </div>
            </div>
            {/*功能区*/}
            <div style={{display: "flex"}}>
                <div>书名</div>
                <input placeholder={"请输入书名"}/>

                <input style={{backgroundImage: search, width: "50px"}} type={"button"} value={"搜索"}></input>
                <input style={{backgroundImage: empty, width: "50px"}} type={"button"} value={"清空"}></input>

            </div>
            {/*列表*/}
            <br/>
            <div style={{display: "flex"}}>
                <div style={{flex: 1}}>编号</div>
                <div style={{flex: 1}}>书名</div>
                <div style={{flex: 1}}>单价</div>
                <div style={{flex: 1}}>状态</div>
                <div style={{flex: 1}}>新增时间</div>
                <div style={{flex: 1}}>操作</div>
            </div>
            {
                books.map((item, index) => {
                    return (
                        <div key={index} style={{display: "flex", marginTop: "30px"}}>
                            <div style={{flex: 1}}>{item.isbn}</div>
                            <div style={{flex: 1}}>{item.bookName}</div>
                            <div style={{flex: 1}}>{item.price}</div>
                            <div style={{flex: 1}}>{item.state ? "启用" : "关闭"}</div>
                            <div style={{flex: 1}}>{item.creatAt}</div>
                            <div style={{flex: 1, display: "flex"}}>
                                <button
                                    onClick={() => {
                                        detail(item.id);
                                        setIsDetail(false)
                                        console.log()
                                    }}
                                >
                                    编辑
                                </button>
                                <button onClick={() => {
                                    let confirm = window.confirm("确认删除");
                                    if (confirm) {
                                        deleteMethod(item.id)
                                        listBook()
                                        console.log("按了确认")
                                    } else {
                                        console.log("按了取消")
                                    }
                                }}>
                                    删除
                                </button>

                            </div>
                        </div>
                    )
                })
            }


            {/*底部*/}
            <div style={{display: "flex"}}>
                <button>
                    <img
                        onClick={(e) => {
                            setCount(count >1 ? count - 1:count)
                        }}
                        style={{width: "20px"}} src={leftArrow}/>
                </button>
                <button onClick={(e) => {
                    setCount(count >1 ? count - 1:count)
                }} style={{width: "20px"}}> {count > 2 ? count - 1 : 1}</button>
                <button style={{width: "20px"}}>{count > 2 ? count : 2}</button>
                <button
                    onClick={() => {
                        setCount(count > 2 ? count + 1 : 3)
                    }}
                    style={{width: "20px"}}>{count > 2 ? count + 1 : 3}</button>
                <button style={{backgroundImage: rightArrow}}>
                    <img
                        onClick={() => {
                            setCount(count + 1)
                        }}
                        style={{width: "20px"}} src={rightArrow}/>
                </button>
            </div>

            {/*new post*/}
            <div style={{position: "absolute", top: "70px",marginLeft:"380px"}} hidden={isNewPost}>
                <input
                    onInput={(e)=>{
                        setTitle(e.target.value)
                    }}
                    placeholder={"请输入title"}/>
                <input
                    onInput={(e)=>{
                        setContent(e.target.value)
                    }}
                    placeholder={"请输入price"}/>
                <button onClick={() => {
                    creatBook()
                    listBook()
                    setNewPost(true)
                }}>提交
                </button>
            </div>
            {/*详情*/}
            <div  style={{position: "absolute", top: "30px",backgroundColor:"red",width:"40%",height:"200px",marginLeft:"10%",marginTop:"100px"}} hidden={isDetail}>
                <div>id是{details.id}</div>
                <div>bookName</div>
                <input value={title} onInput={(e)=>{
                        // console.log(e.target.value)
                        setTitle(e.target.value)
                }} />
                <div>describe</div>
                <input value={content} onInput={(e)=>{
                    // console.log(e.target.value)

                    setContent(e.target.value)
                }} />
                <div>是否开启</div>

                <button onClick={() => {
                    updata(details.id)
                    setIsDetail(true)
                }}>提交
                </button>
            </div>
        </div>
    )
}

export default App;