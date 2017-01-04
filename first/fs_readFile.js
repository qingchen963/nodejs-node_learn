const http = require('http');
const fs = require('fs');

//readFile(文件名，回调)
fs.readFile('aaa.txt',function(err,data){
	if (err) {
		console.log(err)
	} else {
		console.log(data.toString());
	}
})