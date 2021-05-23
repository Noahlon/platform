import Mock from "mockjs"
Mock.mock('/api/list','get',{
    status: true,
    data:[
        {id:1,title:"1111"},
        {id:2,title: "222"},
    ]
})
