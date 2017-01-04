const url = require('url');

var obj = url.parse('https://ke.qq.com/webcourse/index.html#course_id=166732&term_id=100194147&taid=839313919216460&vid=x1414qxu2zb');
var obj_query = url.parse('https://ke.qq.com/webcourse/index.html?course_id=166732&term_id=104147&ta',true);
console.log(obj_query)