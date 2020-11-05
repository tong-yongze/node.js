const fs = require('fs')

fs.readFile('../code/素材/成绩.txt', 'utf8', function (err, dataStr) {
    if (err) return console.log('读取文件失败！' + err.message);

    console.log('读取文件成功！' + dataStr);


    const arrOld = dataStr.split(' ')
    const arrNew = []

    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '))

    })
    console.log(arrOld);
    console.log(arrNew);
    const arrStr = arrNew.join('\r\n')
    fs.writeFile('../code/files/成绩ok.txt', arrStr, err => {
        if (err) return ('文件读取失败' + err)
    })
    console.log('写入成功');
})