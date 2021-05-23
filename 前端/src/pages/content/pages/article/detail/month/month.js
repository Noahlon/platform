import React, {useEffect, useState} from "react";
import activeFavorites from "../../../../../../imgs/activeFavorites.png";
import common from "../../../../../../utils/common";
import Favorites from "../../../../../../imgs/Favorites.png";
import {Link} from "react-router-dom";

function Month(props) {
    let id
    //修改收藏图片
    let ClickFavorites = (e) => {
        console.log("elast:", e)
        e.src = Favorites
        console.log(e)
    }
    const [articles, setAticles] = useState([])
    // 获取文章列表
    useEffect(() => {
        console.log("props.page",props.page)
        let data = {
        }
        common.ajax('/api/post/month',data).then(res => {
            console.log("res", res)

            for (let i = 0; i < res.length; i++) {
                res[i].img = Favorites
            }
            setAticles(res || [])
        })
    }, [])
    //收藏请求ajax
    let favorites = () => {
        let data = {}
        console.log("id:", id)
        common.ajax('/api/post/favorite?&id=id&token=' + window.localStorage.getItem("token"), data, "post").then(res => {
            console.log("myres", res)
        })
    }
    return (
        <div>
            {
                articles.map((item, index) => {
                    return (
                        <div key={index + "div"} className={"article"}>
                            <div className={"article_list"}>
                                <div className={"left"}>
                                    <img style={{width: "60px",}} src={item.avatar}/>
                                </div>
                                <div className={"center"}>
                                    <div className={"center1"}>
                                        <Link key={index + "link"} to={"/app/content/detail/" + item.post.id}>
                                            <div className={"title"}>
                                                {item.post.title}`
                                            </div>
                                        </Link>
                                        <div className={"info"}>
                                            级别{item.post.updatedAt}
                                        </div>
                                    </div>
                                </div>
                                <div className={"right"}>
                                    <img
                                        onClick={(e) => {
                                            item.img === activeFavorites ? item.img = Favorites : item.img = activeFavorites
                                            //重新构建对象
                                            id = item.post.id
                                            console.log(item.post.id)
                                            setAticles([...articles])
                                            favorites()
                                        }}
                                        style={{marginTop: "15px"}} width={"30px"} src={item.img}/>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>

    )
}

export default Month
