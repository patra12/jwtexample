const express = require('express');
const pool = require('../db');
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

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
            //console.log(req.body); 
            ///console.log(req.body.data.email);

            var email = req.body.data.email;
            var phone = req.body.data.phone;
            var telephone = req.body.data.telephone;
            var contact_email = req.body.data.contact_email;
            var contact_phone = req.body.data.contact_phone;
            var contact_telephone = req.body.data.contact_telephone;
            var contact_address = req.body.data.contact_address;
            var copyrights = req.body.data.copyrights;
            var map_location = req.body.data.map_location;

            connection.query("UPDATE settings SET email='" + email + "', phone='" + phone + "', telephone='" + telephone + "', contact_email='" + contact_email + "', contact_phone='" + contact_phone + "', contact_telephone='" + contact_telephone + "', contact_address='" + contact_address + "', copyrights='" + copyrights + "', map_location='" + map_location + "' ", function (err, rows) {
                connection.release();
                if (!err) {
                    res.json("updated");
                } else {
                    res.json("err");
                }

            });
        });
    }

}

module.exports = methods;
