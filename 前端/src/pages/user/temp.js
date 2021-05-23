//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route} from "react-router-dom";
import {render} from "react-dom";
//css
import './index.css';
//package
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
                   {/*<Route exact path={"/Temp1"} component={Temp1}/>*/}
                </Switch>
            </HashRouter>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ssn</div>
        </div>
    )
}

export default Tmpe;
