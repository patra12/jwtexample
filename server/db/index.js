
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b127e5894c974c',
    //port: '8889',
    password: 'fe2c7d90',
    database: 'heroku_733928f9843c014',
    debug: false
});
module.exports = pool;