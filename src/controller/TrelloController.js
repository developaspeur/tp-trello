/**
 * Created by Dimsurf on 09/02/2017.
 */
var UserDAO = require('../model/UserDAO');
var UserDTO = require('../model/UserDTO');

class TrelloController{
  constructor(){
    this.name = null;  
    this.password = null;  
    this.confirPassword = null;  
  }

	getAllAction(req,res){
console.log(this)
		switch (req){
			case "users":
      break;

		}
    this.name =  req.body.name;
    this.password =  req.body.password;
    this.confirPassword =  req.body.confirmPassword;
    console.log(name,password,confirPassword);

    res.send('respond with a resource'+ name + password + confirPassword);

	};
}




module.exports = new TrelloController();