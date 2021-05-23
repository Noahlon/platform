import React from 'react'
import {HashRouter, Switch, Route} from "react-router-dom";
//包

import Hot from '../component/hot'
import Index from '../component'
function User() {
    console.log('sss')
    return (
        <HashRouter>
            <Switch>
                {/*精确匹配 exact*/}
                <Route exact path="/component/hot" component={Hot}/>
                <Route exact path="/component/index" component={Index}/>
            </Switch>
        </HashRouter>
    )
}

export default User