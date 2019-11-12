require('dotenv').config()
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: '',
    database: "node_auth",
    debug: false
});
module.exports = pool;