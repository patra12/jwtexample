const pool = require('../db');
//const imageThumbnail = require("image-thumbnail");
var methods = {
    //for product list
    productlist: function productlist(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.json({ "code": 100, "status": "Error in connection database","error":err });
                return;
            }
            console.log('connected as id ' + connection.threadId);
            connection.query("select * from product", function (err, rows) {
                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        });
    },

    // for add product
    addproduct: function addproduct(req, res) {
        pool.getConnection(function (err, connection) {

            var product_name = req.body.product_name;
            var product_alias = req.body.product_alias;
            var product_description = req.body.product_description;
            var feature_benefitas = req.body.feature_benefitas;
            var feature_description = req.body.feature_description;
            var price = req.body.price;
            var image = req.file.filename;
            var meta_title = req.body.meta_title;
            var meta_description = req.body.meta_description;
            var meta_keywords = req.body.meta_keywords;
            var pdf_name = req.body.pdf_name;
            var status ='active';
            //let options = { width: 100, height: 100, responseType: 'base64' }
            //const thumbnail = imageThumbnail("uploads/"+image, options);
            //console.log("birja"+thumbnail);

            connection.query("INSERT INTO product (product_name, product_alias, product_description,feature_benefitas,feature_description,price, image,meta_title,meta_description,meta_keywords,pdf_name,status) VALUES ('" + product_name + "','" + product_alias + "','" + product_description + "','" + feature_benefitas + "','" + feature_description + "','" + price + "','" + image + "','" + meta_title + "','" + meta_description + "','" + meta_keywords + "','" + pdf_name + "','" + status + "')", function (err, rows) {

                connection.release();
                if (!err) {
                    res.json("Added");
                } else {
                    res.json("err");
                }
            });
        });
    },

    //For edit page individual ID details

    editproduct: function editproduct(req, res) {
        pool.getConnection(function (err, connection) {
            console.log("Fetching id: " + req.params.id);
            const pId = req.params.id;
            console.log("birja", pId);
            connection.query("select * from product where id ='" + pId + "'", function (err, rows) {

                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        });
    },

    //For update product data post value for edit

    editpostproduct: function editpostproduct(req, res) {
        pool.getConnection(function (err, connection) {

            console.log("Fetching id: " +req.body);
            const pId = req.params.id;
            var update = "UPDATE `product` SET";
            update += "`product_name`='" + req.body.product_name;
            update += "',`product_alias`='" + req.body.product_alias;
            update += "',`product_description`='" + req.body.product_description;
            update += "',`feature_benefitas`='" + req.body.feature_benefitas;
            update += "',`feature_description`='" + req.body.feature_description;
            update += "',`price`='" + req.body.price;
            update += "',`image`='" + req.body.image;
            update += "',`meta_title`='" + req.body.meta_title;
            update += "',`meta_description`='" + req.body.meta_description;
            update += "',`meta_keywords`='" + req.body.meta_keywords;
            update += "',`pdf_name`='" + req.body.pdf_name;
            update += "',`status`='" + "active";
            update += "' WHERE  `id`=" + req.params.id;
            console.log(update);
            connection.query(update, function (err, rows) {

                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        });
    },

    //For delete product data 

    deleteproduct: function deleteproduct(req, res) {
        pool.getConnection(function (err, connection) {
            console.log("deleted id: " + req.params.id);
            const pId = req.params.id;
            connection.query("DELETE FROM product where id ='" + pId + "'", function (err, rows) {

                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        });
    }

}

module.exports = methods;
