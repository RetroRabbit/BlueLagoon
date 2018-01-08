var mysql     =    require('mysql');

var pool      =    mysql.createPool({
   connectionLimit : 100, //important
   host     : 'localhost',
   user     : 'root',
   password : 'passsql',
   database : 'chatterbox',
   debug    :  false
});

exports.POOL=pool;