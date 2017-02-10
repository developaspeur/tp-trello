/**
 * Created by Dimsurf on 09/02/2017.
 */
// TrelloRouter.js

const express = require('express');
var TrelloController = require('../controller/TrelloController');
var TrelloRouter = express.Router();

/* GET home page. */
TrelloRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Trelloo' });
});

/* GET LOGIN user . */
TrelloRouter.post('/signin', TrelloController.isLogged);
/* GET Insert user . */
//TrelloRouter.post('/signout',TrelloController.isInsert.bind(TrelloController));


TrelloRouter.post('/signout', TrelloController.signout.bind(TrelloController));
TrelloRouter.get('/signout', function(req, res, next) {
    res.render('signout', { title: 'Trelloo' });
});

TrelloRouter.get('/users', TrelloController.signout.bind(TrelloController));


module.exports = TrelloRouter;
