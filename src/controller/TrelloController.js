/**
 * Created by Dimsurf on 09/02/2017.
 */
var UserDAO = require('../model/UserDAO');
var UserDTO = require('../model/UserDTO');

class TrelloController {

    // S'il est logger
    isLogged (req,res){
        var name =  req.body.name;
        var password =  req.body.password;
        var confirmPassword =  req.body.confirmPassword;

       UserDAO.findOneForConnect(name , password)
        .then(function (uUserDao){

            if(uUserDao.length > 0 ){
                console.log(uUserDao);
                res.send('respond with a resource'+ name + password + confirmPassword);

            }else{
                console.log('pas de suer');
            }
        })
        .catch(function (err){
            res.send('respond errer' + err);
        });

    }

    // Insertion
    signout (req,res){
      this.name = req.body.name;
      this.password = req.body.password;
      UserDAO.signout(this.name, this.password);
      res.render('task', {username: this.name} );

    }



}

module.exports = new TrelloController();