const http = require('http');

var server = http.createServer(function(req,res){
	//POST-req
	var str = '';//接收数据
	//POST很大——分段，所以分段接收
	//data——有一段数据到达就执行一次
	var i = 0;
	req.on('data', function (data){
		console.log(`第${i++}次收到数据`)
		str += data;
	});
	//end——数据全部到达（一次）
	req.on('end', function (){
		console.log(str);
	});
});

server.listen(3000);