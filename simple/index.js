const Wechat = require('wechat-mp-hack');
var fs = require("fs");
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'rm-bp15gczz2b6835281.mysql.rds.aliyuncs.com',
//     user     : 'news',
//     password : '',
//     database : 'test'
// });

// connection.connect();

(async () => {
    const API = new Wechat('2035911878@qq.com', 'aa555555');

    API.once('scan.login', (filepath) => {
        // 登录二维码图片地址
        console.log(filepath);
        console.log('请用手机微信扫描二维码确认登录');
    });
    console.log(API.data)
    // API.appmsg().then((items) => {
    //     console.log(items);
    // }).catch(console.error.bind(console));
    API.message(100).then(msgs => {
        // console.log(msgs)
        msgs.msg_item.forEach(function (val,index) {
            console.log(val.type)
            // if(val.type == 47){
            //     console.log(val)
            //     let stream = fs.createWriteStream(`/Users/orlan/Desktop/${index}.png`)
            //     API.getImage(val.id,stream).then(message => {
            //         console.log(message)
            //     }).catch(console.error.bind(console))
            // }
        })
    }).catch(console.error.bind(console));
})();
