//导入功能
import React, {useState, useEffect,useContext} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import {render} from "react-dom";
//css
import './aricle.css';
//package
import Month from "./detail/month/month";
import Week from "./detail/week/week";
import Essence from "./detail/essence/essence";
import All from "./all/all";
import TopTime from "./toptime/toptime";

function Article(props) {
    let [page, setPage] = useState()
    let [userName,setUserName] = useState("")
    return (
        <div>
            <TopTime/>
            <HashRouter>
                <Switch>
                    <Route path={"/app/content/article/all"} component={All}/>
                    <Route path={"/app/content/article/month"} component={Month}/>
                    <Route path={"/app/content/article/week"} component={Week}/>
                    <Route path={"/app/content/article/essence"} component={Essence}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Article
