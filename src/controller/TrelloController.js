/**
 * Created by Dimsurf on 09/02/2017.
 */
var UserDAO = require('../model/UserDAO');
var UserDTO = require('../model/UserDTO');
function TrelloController(){}


TrelloController.prototype.getAllAction= function(req,res){
    var name =  req.body.name;
    var password =  req.body.password;
    var confirPassword =  req.body.confirmPassword;
    console.log(name,password,confirPassword);

     res.send('respond with a resource'+ name + password + confirPassword);

};




module.exports = new TrelloController();