
// 导入express
const express = require('express')
//创建 web 服务器
const app = express()

// 监听客户端的GET和POST请求 并向客户端响应具体的内容
app.get('/user', (req, res) => {
    res.send({ name: 'zs', age: 20, sex: '男' })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})

app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1:3000');
})