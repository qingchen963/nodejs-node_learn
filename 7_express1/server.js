const express = require('express');
//静态文件,npm install express-static
const Static = require('express-static');

var server = express();

//.get('/', function(req, res){})	get请求
//.post('/', function(req, res){}) 	post请求
//.use('/', function(req, res){})	通吃

server.use('/b.html',function (req,res){
	//还存在res.write原生的写法，但是send功能更多,比如放json
	res.send('abc');
	res.end();
});

//接口
server.get('/login', function (req,res,next){
	//next()	链式操作
	//console.log(req.query)	GET数据
	//req.body	POST 需要在之前先搞下数据,比如body-parser.urlencoded({})
	//剩下的逻辑和5一样
})

//返回html
server.use(Static('./www'));


server.listen(3000);
