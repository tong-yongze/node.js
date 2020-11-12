// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// TODO:
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')


const secretKey = 'arri'

app.post('/api/login', (req, res) => {
    // 用户登录成功后  通过token字符串 响应给客户端
    res.send({
        status: 200,
        message: '登录成功'
    })
})
// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));