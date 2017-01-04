//用户注册登录
//接口
//	/user?act=reg&user=aaa&pase=123456
//		{'ok':true,'msg':'ss'}
//对文件的访问
//对接口的访问
const http = require('http');
const query = require('querystring');
const fs = require('fs');
const _url = require('url');

var users = {
	"ice": "666666",
	"dice": "555555",
}

var server = http.createServer(function (req,res){
	//解析数据
	var str = '';
	req.on('data', function (data){
		str += data;
	});
	req.on('end', function (){
		var obj = _url.parse(req.url,true);

		const url = obj.pathname;
		const GET = obj.query;
		const POST = query.parse(str);
		//区分——接口，文件
		if (url == '/user') {//接口
			switch(GET.act){
				case 'reg':
					//1.检查用户名是否已经有了
					//2.插入users
					if (users[GET.user]) {
						res.write('{"ok":false,"msg":"此用户已存在"}');
					} else {
						users[GET.user] = GET.pass;
						res.write('{"ok":true,"msg":"注册成功"}');
					}
				  break;
				case 'login':
					//1.查看用户是否有
					//2.密码对不对
					if (users[GET.user] == null) {
						res.write('{"ok":false,"msg":"用户不存在"}');
					} else if (users[GET.user] != GET.pass){
						res.write('{"ok":false,"msg":"用户或密码错误"}');
					} else {
						res.write('{"ok":true,"msg":"登陆成功"}');
					}
				  break;
				default:
					res.write('{"ok":false,"msg":"无效请求"}');
				  break;
			}
			res.end();
		} else {	//文件
			//读取文件
			var file_name = './www' + url;
			fs.readFile(file_name, function(err, data){
				if (err) {
					res.write('404');
				} else {
					res.write(data);
				}
				res.end();
			})
		}
		
	})
});

server.listen(3000);