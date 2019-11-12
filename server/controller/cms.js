const pool = require('../db');
var methods = {
    pages: function pages(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.json({ "code": 100, "status": "Error in connection database" });
                return;
            }
            console.log('connected as id ' + connection.threadId);
            connection.query("select * from pages", function (err, rows) {
                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });

        });

    }
}

module.exports = methods;
