//http-无状态的
//cookie:在浏览器保存一些数据
	//不安全(4k)
//session:保存数据在服务端
	//安全

const express = require('express');
const Static = require('express-static');
const cookieParser = require('cookie-parser');//读取cookie中间件


var server = express();

//cookie
	//可以访问子文件cookie，不能同级
server.use(cookieParser('littledice'));//执行1，加入签名，后面能解析出来签名之前的

server.use('/', function (req,res,next){
	req.secret = 'littledice';//签名
	//发送cookie
	res.cookie('user','ice',{path:'/', maxAge: 60*1000, signed: true});
	console.log('签名的cookie',req.signedCookies)//通过执行1读取cookie
	console.log('没签名的cookie',req.cookies)//通过执行1读取cookie

	res.send('ok');
})

server.listen(3000);
