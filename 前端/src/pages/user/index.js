//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route,Link} from "react-router-dom";
import {render} from "react-dom";
//css
// import './index.css';
//package
import Login from "./login/login";
import Register from './register/register'

//img
function Tmpe() {
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

            <HashRouter>
                <Switch>
                   <Route exact path={"/login"} component={Login}/>
                   <Route exact path={"/register"} component={Register}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Tmpe;
