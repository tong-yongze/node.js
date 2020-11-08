const arri = require('./arri')

// 格式化时间的功能
const daStr = arri.dateFormat(new Date())

console.log(daStr);
console.log('--------------');

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'

const str = arri.htmlEscape(htmlStr)
console.log(str);
console.log('--------------');


const str2 = arri.htmlUnEscape(str)
console.log(str2);