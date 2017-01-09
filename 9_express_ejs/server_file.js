const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

var server = express();

var objMulter = multer({dest: './www/upload/'});

server.use(objMulter.any());

server.post('/', function (req, res, next){
	console.log(req.files)
	//console.log(req.files[0].originalname)

	//新文件名
	var newName = req.files[0].path + path.parse(req.files[0].originalname).ext;

	//1.获取原始文件扩展名

	//2.重命名临时文件
	fs.rename( req.files[0].path, newName, function (err){
		if (err) {
			res.send('上传失败');
		} else {
			res.send('成功');
		}
	})
});



server.listen(3000);