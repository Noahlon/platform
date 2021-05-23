//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import {HashRouter, Switch, Route} from "react-router-dom";
import {render} from "react-dom";
//css
import './index.css';
//package
import Head from './pages/head/head'

import common from "./utils/common";
import Content from "./pages/content/content";
import NewPost from "./pages/content/pages/article/newPost/newPost";
export  const MyContext = React.createContext({


})
//img
function App(props) {

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
        <MyContext.Provider onchang={(temp)=>{
            setCount(temp)
        }} value={{count,setCount}}>
        <div>
            `
            <HashRouter>
                <Switch>
                   <Route  path={"/app/content"} component={Content}/>
                </Switch>
            </HashRouter>
        </div>
        </MyContext.Provider>
    )
}

export default App;
