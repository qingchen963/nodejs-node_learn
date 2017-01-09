const fs = require('fs');

//重命名
fs.rename('a.txt', 'b.txt', function (err){
	if (err) {
		console.log(err)
	}
})
