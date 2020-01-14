const pool = require('../db');

var methods = {
    settingsData: function settingsData(req, res) {
        pool.getConnection(function (err, connection) {
            connection.query("select * from settings", function (err, rows) {
                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        });
    },

    //for post update data

    settingsPostData: function settingsPostData(req, res) {
        pool.getConnection(function (err, connection) {

            var email = req.body.data.email;
            var phone = req.body.data.phone;
            var telephone = req.body.data.telephone;
            var contact_email = req.body.data.contact_email;
            var contact_phone = req.body.data.contact_phone;
            var contact_telephone = req.body.data.contact_telephone;
            var contact_address = req.body.data.contact_address;
            var copyrights = req.body.data.copyrights;
            // var map_location = req.body.data.map_location;
            var homepage_title = req.body.data.homepage_title;
            var homepage_description = req.body.data.homepage_description;
            var dashboard_title = req.body.data.dashboard_title;
            var dashboard_description = req.body.data.dashboard_description;

            var Update_query = "UPDATE settings SET email='" + email + "', phone='" + phone + "', telephone='" + telephone + "', contact_email='" + contact_email + "', contact_phone='" + contact_phone + "', contact_telephone='" + contact_telephone + "', contact_address='" + contact_address + "', copyrights='" + copyrights + "',homepage_title = '"+homepage_title+"',homepage_description='"+homepage_description+"',dashboard_title='"+dashboard_title+"',dashboard_description='"+dashboard_description+"'";
            console.log(Update_query);
            connection.query(Update_query, function (err, rows) {
                connection.release();
                if (!err) {
                    res.json("Updated");
                } else {
                    res.json("Error");
                }

            });
        });
    }

}

module.exports = methods;
