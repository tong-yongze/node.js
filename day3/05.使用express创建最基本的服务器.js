// 1.导入 express
const express = require('express')
// 2.创建web 服务器
const app = express()

// 4.监听客户端GET和POST请求  并向客户端响应具体的内容
app.get('/user', (req, res) => {
    res.send({
        name: 'zs',
        age: '19',
        sex: '男'
    })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})
// 默认情况下 req.query 是一个空对象
app.get('/', (req, res) => {
    console.log(req.query);
    res.send(req.query)
})

// 默认情况下 这里的 :id 是一个动态的参数
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})

// 3.启动web 服务器
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1:3000');
})