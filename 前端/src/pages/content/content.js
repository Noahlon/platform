import React from 'react'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import './content.css';
import Article from "./pages/article/article";
import NewPost from './pages/article/newPost/newPost'
import Detail from "./pages/article/detail/detail";
import PersonalCenter from "./pages/article/personalCenter/personalCenter";
import NewProblem from './pages/article/newProblem'
import Head from "../head/head";
import Right from "./right";
function Content(props) {
    return (
<>
    <Head onClick ={()=>{

        console.log("hello")

    }} props = {props} />
    <br/>
    <br/>
    <br/>
        <div className={"content"}>

            <div className={"left"}>
                <HashRouter>
                    <Switch>
                        <Route  path={"/app/content/personalCenter"} component={PersonalCenter}/>
                        <Route  path={"/app/content/detail/:id"} component={Detail}/>
                        <Route  path={"/app/content/newPost"} component={NewPost}/>
                        <Route  path={"/app/content/newProblem"} component={NewProblem}/>
                        <Route  path={"/app/content/article"} component={Article}/>
                    </Switch>
                </HashRouter>
            </div>
            <Right props={props}  ></Right>
        </div>
</>

    )
}

export default Content;