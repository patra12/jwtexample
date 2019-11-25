
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    //port: '8889',
    password: '',
    database: 'node_test',
    debug: false
});
module.exports = pool;