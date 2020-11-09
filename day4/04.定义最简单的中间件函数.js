const express = require('express')
const app = express()

// 开始定义
const mw = function (req, res, next) {
    console.log('这是最简单的中间件函数');
    // 把流转关系 转交给下一个中间件或路由
    next()
}
// 将mw 注册为全局生效的中间件
app.use(mw)

app.listen(80, () => {
    console.log('http://127.0.0.1');
})