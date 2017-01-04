const http = require('http');
const querystring = require('querystring');
const url = require('url');

http.createServer(function(req,res){
	//console.log(req.url);
	//var get = querystring.parse(req.url);
	var GET = url.parse(req.url,true).query;
	console.log(GET)
	//req获取前台请求数据
	res.write('aaa');
	res.end();
}).listen(2000);

