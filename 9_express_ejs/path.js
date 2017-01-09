const path = require('path');

var str = 'c:\\wamp\\a.html';

var obj = path.parse(str);

// { root: 'c:\\',
//   dir: 'c:\\wamp',
//   base: 'a.html',
//   ext: '.html',
//   name: 'a' }
  
console.log(obj)