//starting express server
const express = require('express');
const app = express.Router();

//call all defined methods form controller
const call = require("../controller");
const cms = require("../controller/cms.js");

//seted api route actual mthod is in controller
app.get('/test', call.test);
app.get('/debug', call.debug);

//for CMS pages
app.get('/pages', cms.pages);

//sending file where ever the code is nidded in project mainly in index.js 
module.exports = app;


