const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

// const names = path.basename(fpath)
// console.log(names);

const names = path.basename(fpath, '.html')
console.log(names);   // 打印得到index