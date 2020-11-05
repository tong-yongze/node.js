// 1.1 导入 fs 模块
const { log } = require('console')
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
  // console.log('读取html 成功！');

  resolveCSS(data)
  resolveJS(data)
  resolveHTML(data)
})

// 定义处理css 方法
function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

  fs.writeFile(path.join(__dirname, '/test/index1.css'), newCSS, function (err) {
    if (err) return console.log('写入css 样式失败');
    console.log('写css 样式成功');
  })
}

// 定义js 方法
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr)

  const newJS = r2[0].replace('<script>', '').replace('</script>', '')

  fs.writeFile(path.join(__dirname, '/test/index.js'), newJS, function (err) {
    if (err) return console.log('写入js脚本失败！' + err.message);
    console.log('写入js脚本成功！');
  })
}

// 定义html 结构方法
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, '/test/index.html'), newHTML, function (err) {
    if (err) return console.log('写入html 页面失败' + err.message);
    console.log('写入html 页面成功');
  })
}

