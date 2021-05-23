import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from "./App";


let el=(
    <App></App>
)

render(el, document.getElementById("root"))

var count = 0
f(100)
function f(x) {
    if (x <=1 ){
        count ++;
        console.log(count)
        return
    }
    f(x-1)
    f(x-2)
}