require('dotenv').config()
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'mysql://b127e5894c974c:fe2c7d90@us-cdbr-iron-east-05.cleardb.net/heroku_733928f9843c014?reconnect=true',
    user: 'b127e5894c974c',
    password: 'fe2c7d90',
    database: "heroku_733928f9843c014",
    debug: false
});
module.exports = pool;
