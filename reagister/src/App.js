//导入功能
import React, {useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
//css
import './App.css';
//package
//img
function Login(props) {
    //Effect parameter
    //底部按钮
    const [buttonValue, setValue] = useState("注册");
    const [login, setLogin] = useState([]);

    const [strNickname, setStrNickname] = useState("请输入账号")
    const [strName, setStrName] = useState("请输入密码")
    const [strPassWord, setStrPassWord] = useState("请再次输入密码")

    const [nickName, setNickName] = useState([])
    const [name, setName] = useState([])
    const [password, setPassWord] = useState([])


    useEffect(() => {
        console.log(login)
    }, [buttonValue])
    //data
    //method
    let submit = (e) => {
        if(password !== name){
            console.log(password,name)
            alert("两次输入的密码不一致.请重新输入");
            return;
        }



        let data = {
            username:nickName,
            password:password,
        }
        let url = 'http://localhost:8082/userCreate'
        axios.post(url,qs.stringify(data)).then(res => {
                alert("注册成功");
        });
    }
    //Effect
    return (
        <div className={"login"}>
            <div className={"logo"}>
                <span>学坝</span>
            </div>
            <div className={"logo_Bottom"}>
                为了孩子们的梦想
            </div>
            <br/>
            <div className={"mainBody"}>
                <div className={"border"}>

                    <div  className={"register_text active"}>注册</div>
                </div>

                <div className={"mainInput"}>
                    <input
                        onBlur={(e) => {
                            e.target.classList.add('your-class');
                            if (!e.target.value) {
                                setStrNickname("账号不能为空")
                            }
                        }}
                        onInput={(e) => {
                            setNickName(
                                e.target.value
                            )
                        }}
                        style={{marginBottom: "30px"}} placeholder={strNickname} className={"input text_name"}/>
                    <input placeholder={strName} type={"password"}
                           onBlur={(e) => {
                               e.target.classList.add('your-class');
                               if (!e.target.value) {
                                   setStrName("密码不能为空")
                               }
                           }}
                           onInput={(e) => {
                               setName(
                                   e.target.value
                               )
                           }}
                           className={"input text_name"}/>
                    <input
                        onBlur={(e) => {
                            e.target.classList.add('your-class');
                            if (!e.target.value) {
                                setStrPassWord("密码不能为空")
                            }
                        }}
                        onInput={(e) => {
                            setPassWord(
                                e.target.value
                            )
                        }}
                        placeholder={strPassWord} type={"password"} className={"input password"}/>
                    <p style={{color: "red", textIndent: "40px", fontSize: "5px"}}>{login}</p>
                    <input style={{cursor:"pointer"}} onClick={(e) => {
                        submit()
                        // e.target
                    }} value={buttonValue} type={"button"} className={"input button"}/>
                </div>
            </div>
        </div>
    )
}

export default Login;

