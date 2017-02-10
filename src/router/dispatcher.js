/**
 * Created by Dimsurf on 09/02/2017.
 */

// dispatcher.js
const express = require('express');
var dispatcher = express.Router();
var TrelloRouter = require('./TrelloRouter');

dispatcher.use('/',TrelloRouter);

module.exports = dispatcher;
