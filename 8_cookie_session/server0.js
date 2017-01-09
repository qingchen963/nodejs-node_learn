//http-无状态的
//cookie:在浏览器保存一些数据
	//不安全(4k)
//session:保存数据在服务端
	//安全

const express = require('express');
const Static = require('express-static');

var server = express();

server.use('/', function (req,res,next){
	res.cookie('user','ice');
	res.send('ok');
})

server.listen(3000);
