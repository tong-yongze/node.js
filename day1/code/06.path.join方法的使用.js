const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
// const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
// console.log(pathStr)  // \a\b\d\e

// fs.readFile(__dirname + '/files/1.txt')

// fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function (err, dataStr) {
//   if (err) {
//     return console.log(err.message)
//   }
//   console.log(dataStr)
// })

const absolutePath = path.join(__dirname, './files/成绩.txt')

fs.readFile(absolutePath, 'utf8', (err, data) => {
  if (err) return console.log('读取失败', err);
  console.log('读取成功');
})