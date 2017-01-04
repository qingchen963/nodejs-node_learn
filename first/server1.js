const http = require('http');

var server = http.createServer(function(req,res){
	switch(req.url){
		case '/a.html':
			res.write('aaaaa');
		break;
		default:
			res.write('404');
		break;
	}
	//res.write('hello');
	res.end();
})

server.listen(3000);