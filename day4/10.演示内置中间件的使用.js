// 导入 express 模块
const express = require('express')
// 创建 express 服务器实例
const app = express()

// 注意 除了错误级别的中间件 其他的中间件 必须在路由之前进行配置
// 通过 express.json() 这个中间件 解析表单中的JSON 格式的数据
// extended是 false 的话 会使用内部的querystring 模块进行解析
// extended是 true 的话 会使用第三方的qs 模块进行解析
app.use(express.urlencoded({ extended: false }))
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body);
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
    console.log(req.body)
    res.send('ok')
})

app.listen(80, function () {
    console.log('http://127.0.0.1');
})