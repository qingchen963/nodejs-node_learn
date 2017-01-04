const http = require('http');
const fs = require('fs');
const query = require('querystring');
const _url = require('url');

var server = http.createServer(function (req, res){
	//GET
	var obj = _url.parse(req.url, true);

	var url = obj.pathname;
	const GET = obj.query;

	//POST
	var str = '';
	req.on('data', function (data){
		str += data;
	});
	req.on('end', function(){
		const POST = query.parse(str);
	});
	//文件请求
	var file_name = './www' + url;
	fs.readFile(file_name, function(err,data){
		if (err) {
			res.write('404');
		} else {
			res.write(data);
		}
		res.end();
	})
});

server.listen(3000);