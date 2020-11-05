// 1.1 导入 fs 模块
const fs = require('fs')
const { resolve } = require('path')
// 1.2 导入 path 模块
const path = require('path')
// 定义正则表达式 进行匹配
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// // 读取
// fs.readFile(path.join(__dirname, '/素材/index.html'), 'utf8', function (err, data) {
//   if (err) return console.log('读取html失败！' + err.message);

//   // console.log('读取html成功！'); 读取成功后 调用对应方法
//   resolveCSS(data)
// })

// function resolveCSS(htmlStr) {
//   const r1 = regStyle.exec(htmlStr)

//   const newCSS = r1[0].replace('<style>', ' ').replace('</style>', ' ')
//   // 写入
//   fs.writeFile(path.join(__dirname, '/test/index.css'), newCSS, function (err) {
//     if (err) return console.log('写入css样式失败' + err.message);
//     console.log('写入css样式成功');
//   })
// }

fs.readFile(path.join(__dirname, '/素材/index.html'), 'utf8', function (err, data) {
  if (err) return console.log('读取html 失败！' + err.message);
  console.log('读取html 成功！');

  resolveCSS(data)
})

function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  const newCss = r1[0].replace('<style>', ' ').replace('</style>', ' ')

  fs.writeFile(path.join(__dirname, '/test/index1.css'), newCss, function (err) {
    if (err) return console.log('写入失败');
    console.log('写入成功');
  })
}


