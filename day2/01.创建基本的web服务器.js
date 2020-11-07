// // 1. 导入 http 模块
// const { read } = require('fs')
// const http = require('http')
// // 2. 创建 web 服务器实例
// const server = http.createServer()
// // 3. 为服务器实例绑定 request 事件，监听客户端的请求
// server.on('request', function (req, res) {
//   console.log('Someone visit our web server.')
// })
// // 4. 启动服务器
// server.listen(8080, function () {
//   console.log('server running at http://127.0.0.1:8080')
// })

// 1.导入http 模板
const http = require('http');

// 2.根据http 模板创建服务器对象
const server = http.createServer();

// 3.监听客户端的请求
// 只要客户端有请求过来就会走这里
// req 是一个请求对象
// res 是一个响应对象
server.on('request', (req, res) => {
  res.end('hello world~~~~');
});

// 4.监听端口
server.listen(8000, () => console.log('Server running on http://127.0.0.1:8000'))

