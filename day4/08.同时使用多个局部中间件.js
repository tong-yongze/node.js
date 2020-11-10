const express = require('express')
const app = express()

const mw1 = (req, res, next) => {
    console.log('调用了第一个局部生效的中间件');
    next();
}
const mw2 = (req, res, next) => {
    console.log('调用了第二个局部生效的中间件');
    next();
}


// 2.创建路由   可用数组 都是等价的
app.get('/', [mw1, mw2], (req, res, next) => {
    console.log(1);
    // res.send('Home page.')
    next()
})
app.get('/', (req, res) => {
    console.log(2);
    res.send('User page.')
})


app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
})