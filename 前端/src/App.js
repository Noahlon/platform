//导入功能
import React, {useState} from 'react'

import {HashRouter, Switch, Route} from "react-router-dom";
//css
import './index.css';


import Content from "./pages/content/content";
export  const MyContext = React.createContext({


})
//img
function App(props) {

    //Effect parameter
    const [count, setCount] = useState(0);

    return (
        <MyContext.Provider onchang={(temp)=>{
            setCount(temp)
        }} value={{count,setCount}}>
        <div>
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
