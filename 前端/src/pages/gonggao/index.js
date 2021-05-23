//导入功能
import React, {useState, useEffect} from 'react'

function GongGao(props) {

 let {onOk} =   props
    return (
        <div onClick={()=>{
            onOk("张三")
        }}>
         公告:欢迎
        </div>
    )
}
export default GongGao;
