const fs = require('fs');

//writeFile(文件名，内容，回调)
fs.writeFile('aaa.txt', 'sadasdsadasdasds' ,function(err){
		console.log(err)
})