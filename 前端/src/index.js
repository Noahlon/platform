//导入功能
import React from 'react';
import {render} from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
//css
import './index.css';
//package
import App from './App';
import Head from './pages/head/head'
import Login from './pages/user/login/login'
import Register from './pages/user/register/register'
//跨组件通信



let Apps = (
        <div className={"index"}>
            {
                function(){
                    setTimeout(()=>{
                        window.location.href= 'http://www.liunoah.com/#/app/content/article/all'
                    },100)
                }()

            }
            <HashRouter>
                <Switch>
                    <Route path={"/app"} component={App} />
                    <Route path={"/head"} component={Head} />
                    <Route path={"/login"} component={Login} />
                    <Route path={"/register"} component={Register} />
                </Switch>
            </HashRouter>

        </div>

)
render(Apps, document.getElementById("root"))
