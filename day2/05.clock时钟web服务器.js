const http = require('http')
const fs = require('fs')

const path = require('path')

// 创建web 服务器
const server = http.createServer()
// 监听 web 服务器 request事件
server.on('request', (req, res) => {

    // 获取到客户端请求的 url 地址
    const url = req.url   // 这里的 url => /
    let fpath = '';
    if (url === '/') {
        fpath = path.join(__dirname, './clock', 'index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }
    // 把请求的 url 地址 映射为具体文件的存放路径
    // const fpath = path.join(__dirname, url)
    fs.readFile(fpath, (err, con) => {
        if (err) return res.end('读取文件失败');  // 如果错误的 响应结果为
        res.end(con);
    });
})

// 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})