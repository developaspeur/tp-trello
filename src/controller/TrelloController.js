/**
 * Created by Dimsurf on 09/02/2017.
 */
var UserDAO = require('../model/UserDAO');
var UserDTO = require('../model/UserDTO');

class TrelloController {

    constructor(){
        this.name = null ;
        this.password = null ;
        this.confirmPassword = null ;
    }

    isLogged (req,res){

        this.name =  req.body.name;
        this.password =  req.body.password;
        this.confirmPassword =  req.body.confirmPassword;

        res.send('respond with a resource'+ this.name + this.password + this.confirmPassword);

    }


}

module.exports = new TrelloController();