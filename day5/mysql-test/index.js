// 引入刚刚安装的 mysql 模块
const mysql = require('mysql');

// 链接数据库
const db = mysql.createPool({
    host: '192.168.85.138', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: 'admin123', // 登录数据库的密码
    database: 'my_db_01', // 指定要操作哪个数据库
});

// select * from users // 查询 users 表里面的内容
const sql = `select * from users`;
db.query(sql, (err, results) => {
    if (err) return console.log(err);
    console.log(results);
});