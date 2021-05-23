import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function TopTime() {
    //标签下划线效果
    let [tag, setTag] = useState(0)
    //
    useEffect(() => {
    }, [])
    return (
        <div className={"timeChoice"}>
            {/*综合*/}
            <Link to={"/app/content/article/all"}>
                <div
                    onClick={(e) => {
                        setTag(0)
                    }}
                    style={{width: "32px"}} className={" tabBar all " + (tag === 0 ? "changeNav" : "")}>综合
                </div>
            </Link>

            <Link to={"/app/content/article/month"}>
                <div
                    onClick={(e) => {
                        setTag(1)
                    }}
                    style={{width: "32px"}} className={" tabBar week " + (tag === 1 ? "changeNav" : "")}>月榜
                </div>
            </Link>

            <Link to={"/app/content/article/week"}>
                <div
                    onClick={(e) => {
                        setTag(2)
                    }}
                    style={{width: "32px"}} className={" tabBar month " + (tag === 2 ? "changeNav" : "")}>周榜
                </div>
            </Link>
            <Link to={"/app/content/article/essence"}>
                <div
                    onClick={(e) => {
                        setTag(3)
                    }}
                    style={{width: "32px"}} className={" tabBar essence " + (tag === 3 ? "changeNav" : "")}>精华
                </div>
            </Link>
        </div>
    )
}
export default TopTime