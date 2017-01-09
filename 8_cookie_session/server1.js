const express = require('express');
const cookieSession = require('cookie-session');//操作session中间件
const cookieParser = require('cookie-parser');//读取cookie中间件


var server = express();

//cookie
server.use(cookieParser());
	//上步解析cookie后拿到session_id
server.use(cookieSession({
	name: 'sess',
	keys : ['aaa', 'bbb', 'ccc'],//设置秘钥,循环使用,越长越安全
	maxAge: 2*3600*1000,//超时时间,没有任何活动多久后
}));

server.use('/', function (req,res,next){
	//console.log(req.session);//空的
	if (req.session['count'] == null) {
		req.session['count'] = 1;
	} else {
		req.session['count']++;
		console.log(req.session['count']);
	} 

	res.send('ok');
	//删除cookie
	//res.clearCookie('user');
	//delete req.session 删除
})


server.listen(3000);
