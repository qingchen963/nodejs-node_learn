const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');//只能解析数据类的POST，不能解析文件上传
const multer = require('multer');
const ejs = require('ejs');
const jade = require('jade');
const fs = require('fs');

var server = express();

var objMulter = multer({dest: './www/upload'});
//dest 	保存地址

//1.解析cookie
server.use(cookieParser('ice'));//简单的签名signed


//2.使用session
var arr_keys = [];
for (var i = 0; i < 10000; i++) {
	arr_keys.push('ice' + Math.random())
};
server.use(cookieSession({
	name: 'ssid',
	keys: arr_keys,
	maxAge: 20*3000*1000,
}))

//3.post数据(配合使用bodyPaser和multer)
//名字和值用req.body
server.use(bodyParser.urlencoded({extended: false}))
//文件用req.files
server.use(objMulter.any());

//用户请求
server.use('/', function (req, res, next){

	console.log(req.query, /*req.body*/req.files, req.cookies, req.session);

	res.send('123');
})

//4.static数据（from静态文件）
server.use(static('./www'));

server.listen(3000);
