//starting & configuring express server

const express = require('express');
const app = express.Router();
//import gm from 'gm';
var fs = require('fs'), gm = require('gm').subClass({imageMagick: true});

//let imageThumbnail = require("image-thumbnail");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //console.log("birja file", file);
        let str = __dirname;
        
        cb(null, "uploads/product/");
        
        gm(str.replace("/server/router","") + '/uploads/product/'+file.originalname)
            .resize(240, 240)
            .write(str.replace("/server/router","") + '/uploads/product/thumb/'+file.originalname, function (err) {
                if (!err) console.log('done');
            });
            //console.log("birja file", str.replace("/server/router","") + '/uploads/'+file.originalname);
        // let options = { width: 100, height: 100 }
        // let str = __dirname;
        // const thumbnail = imageThumbnail(str.replace("/server/router","") + '/uploads/'+file.originalname, options);
        // console.log("birja"+thumbnail);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

//call all defined methods form controller
const call = require("../controller");
const product = require("../controller/product.js");
const settings = require("../controller/settings.js");
const mail = require("../controller/mail");
const pdf = require("../controller/pdf");


/*========== testing routes ==========*/
//seted api route actual mthod is in controller
app.get('/test', call.test);
app.get('/debug', call.debug);

/*========== product page route ===========*/
//for productlist pages
app.get('/productlist', product.productlist);
//for add product pages
app.post('/addproduct', upload.single("image"), product.addproduct);

//app.post('/addproduct', upload.single("image"), product.addproduct);
//for edit product pages
app.get('/editproduct/:id', product.editproduct);
//for edit post product pages
app.put('/editpostproduct/:id', product.editpostproduct);
//for edit post product pages
app.get('/deleteproduct/:id', product.deleteproduct);


/*========== settings routes ==========*/
// Fetch all data from settings table
app.get('/settingsData', settings.settingsData);
// setting post data update
app.post('/settingsPostData', settings.settingsPostData);

/*========== mail routes ==========*/
app.post("/sendMail", mail.sendMail);

/*========== For PDF ==========*/
app.get('/pdf/:id', pdf.showPdf);

//sending file where ever the code is nidded in project mainly in index.js 
module.exports = app;

