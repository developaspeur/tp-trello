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
TrelloRouter.post('/signin', TrelloController.isLogged.bind(TrelloController));

/* GET Insert user . */
TrelloRouter.get('/signout', function(req, res, next) {
    res.render('signout', { title: 'Sign out' });
});

//TrelloRouter.post('/signout', TrelloController.getAllAction);

TrelloRouter.get('/users', TrelloController.getAllAction);

module.exports = TrelloRouter;
