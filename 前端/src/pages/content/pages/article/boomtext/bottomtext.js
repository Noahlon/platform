import React, {useState} from "react";

function BottomTxt(props) {
    let sum = 10
    let [temp, setTemp] = useState(2)
    return (
        <div className={"temp2"} style={{display: "flex"}}>
            <div>
                <input
                    onClick={() => {
                        setTemp(temp - 1)
                    }}
                    className={"page"} type={"button"} value={"<上一页"}/>
            </div>
            <div>
                <input
                    style={props.style}
                    onClick={() => {
                        setTemp(temp - 1)
                    }}
                    type={"button"} value={temp > 1 ? temp - 1 : ""}/>
            </div>
            <div>
                <input style={{backgroundColor: "#4e6ef2"}} type={"button"} value={temp}/>
            </div>
            <div>
                <input
                    onClick={() => {
                        setTemp(temp + 1)
                    }}
                    type={"button"} value={temp < sum ? temp + 1 : ""}/>
            </div>
            <div>
                <input
                    onClick={() => {
                        setTemp(temp + 1)
                    }}
                    className={"page"} type={"button"} value={"下一页>"}/>
            </div>
        </div>
    )
}
export default BottomTxt