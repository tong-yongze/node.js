const express = require('express')
const app = express()

// app.use('/files', express.static('./files'))

// 1. 导入路由模块
// const router = require('./03.router')
// const router = require('./home')
app.use(require('./home'))
// 2. 注册路由模块
app.use('/api', require('./home'))

// 注意： app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
