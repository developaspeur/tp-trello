/**
 * Created by Dimsurf on 09/02/2017.
 */

//app.js
/********************* Imports modules  ***********************/
const express = require('express');
const dispatcher = require('./src/router/dispatcher');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

/********************* Attributes *****************************/
var port = process.argv[2] || 1989;
var app = express();

/********************* MiddleWares ****************************/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

//********************* Templates *****************************/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));

/********************* Routing ********************************/
app.use(dispatcher);

/********************* Listener App ***************************/
var server = app.listen(port,()=>{
    console.log('server is OK');

});
