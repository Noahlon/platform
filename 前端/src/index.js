//导入功能
import {useState, useEffect} from 'react'
import React from 'react';
//render router
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
