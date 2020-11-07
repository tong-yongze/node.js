
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    //  判断请求方式
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        if (req.url === '/') {
            res.end('欢迎来到首页');
        } else if (req.url === '/news') {
            res.end('欢迎来到新闻')
        } else {
            res.end('找不到此页面，404')
        }

    } else {
        res.end('老铁发的是POST请求')
    }

})

server.listen(8000, () => console.log('Server running on http://127.0.0.1:8000'))

// server.on('request', (req, res) => {
//     fs.readFile('./clock/index.html', (err.con)=> {
//         console.log();
//     })
// })