const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    // 定义一个字符串 包含中文的内容
    const str = `您请求的URL地址是${req.url},请求地 method类型为${req.method}`
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(str)

})
server.listen(80, () => {

    console.log('server running at http://127.0.0.1');
})