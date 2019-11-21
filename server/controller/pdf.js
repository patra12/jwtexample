const pool = require('../db');
const fs = require('fs');

var methods = {
    showPdf:function showPdf(req,res){
        pool.getConnection(function (err, connection) {
            const pId = req.params.id;
            console.log(pId);
            connection.query("select * from product where id ='" + pId + "'", function (err, rows) {
            connection.release();
            if(rows[0].pdf_name!='')
            {
                var filePath = "./uploads/pdf/"+rows[0].pdf_name;
                fs.readFile(filePath , function (err,data){
                res.contentType("application/pdf");
                res.send(data);
                });
            }
            });
        });
        
        
    },
    
}

module.exports = methods;