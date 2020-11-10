const url = require('url');
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()


app.use((req, res, next) => {
    const { query } = url.parse(req.url, true);
    req.query = query;
    next();
})

app.get('/', (req, res) => {
    res.send(req.query2)
})

// 1. 导入自己封装的中间件模块
const customBodyParser = require('./14.custom-body-parser')
// 2. 将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
