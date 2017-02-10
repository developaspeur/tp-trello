/**
 * Created by Dimsurf on 09/02/2017.
 */

// TrelloController.js

const express = require('express');
var TrelloController = require('../controller/TrelloController');
var TrelloRouter = express.Router();


/* GET home page. */
TrelloRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Trello' });
});

/* GET users listing. */
TrelloRouter.post('/', function(req, res, next) {

    //res.send('respond with a resource');
    var name =  req.body.name;
    var password =  req.body.password;
    var confirPassword =  req.body.confirmPassword;
    console.log(name,password,confirPassword);
});

/*
beerRouter.get('/',beerController.getAllAction);
beerRouter.post('/',beerController.insertAction);
beerRouter.get('/:id(\\d+)',beerController.getOneAction);
beerRouter.post('/:id(\\d+)',beerController.updateAction);
beerRouter.get('/:id(\\d+)/del/',beerController.deleteAction);
beerRouter.get('/:id(\\d+)/clone',beerController.cloneAction);
*/

module.exports = TrelloRouter;
