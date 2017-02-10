/**
 * Created by Dimsurf on 09/02/2017.
 */
const sqlite = require('sqlite3').verbose();
const fs = require('fs');
const UserDTO = require('./UserDTO');

var fileDB = "content/Trello.db";
var db = new sqlite.Database(fileDB);
var exists = fs.existsSync(fileDB);

class UserDAO {
	constructor(){
	    db.serialize(function(){
	        if(!exists){
	            db.run("CREATE TABLE user (" +
	                "user_id INTEGER PRIMARY KEY AUTOINCREMENT," +
	                "username VARCHAR(80)," +
	                "password VARCHAR(80)," +
	                "confPassword VARCHAR(80)" +
	                ");",function(err){
	                if (err){
	                    console.log('create DB user Error : '+err);
	                    // db.run("DROP TABLE user")
	                }else{
	                    console.log('SQL table user initialized.')
	                }
	            })
	        }else{
	            console.log('SQL table user Already exists.')
	        }
	    });
	}

	findAll(){
	   return new Promise((resolve,reject)=>{
	        var sqlRequest = "SELECT user_id, username , password  FROM user;"
	        var UserDTOs = [];
	        db.all(sqlRequest,(err,rows)=>{

	            if(err){
	                console.log('SELECT user Error : '+err);
	            }else{
	                rows.forEach((row)=>{
	                    var userDTO = new UserDTO(row.user_id);
	                    userDTO.setName(row.username);
	                    userDTO.setPassword(row.password);
	                    UserDTOs.push(userDTO);
	                });
	                resolve(UserDTOs);
	            }
	        });
	    });
	}

	findOneForConnect(username, password){
        return new Promise((resolve, reject)=> {
            var userDTOs = [];
	        var sqlRequest = "SELECT  user_id , username , password  FROM user where username=? and password=?;"
             db.all(sqlRequest, [username, password],(err,rows)=>{
                            if(err){
                                console.log('Erreur UserDAO.findOneForConnect() => '+sqlRequest+' : '+err);
                                reject(err);
                            }else{
                                rows.forEach((row)=>{
                                    var userDTO = new UserDTO(row.user_id);
                                    userDTO.setName(row.username);
                                    userDTO.setPassword(row.password);
                                    userDTOs.push(userDTO);
                                });
                                resolve(userDTOs);
                            }
	        });
        });
	}

	find(id){
		 return new Promise((resolve,reject)=>{
	        var sqlRequest = "SELECT user_id, username , password  FROM user where id=?;"
	        var userDTO = null;
	        db.all(sqlRequest, [id],(err,row)=>{
	            if(err){
	                console.log('Erreur UserDAO.findOneForConnect() => '+sqlRequest+' : '+err);
	            }else{
                    userDTO = new UserDTO(id);
                    userDTO.setName(row.username);
                    userDTO.setPassword(row.password);
	                resolve(userDTO);
	            }
	        });
	    });
	}

	signout(username, password){
		 return new Promise((resolve,reject)=>{
	        var sqlRequest = "INSERT INTO user(username, password) VALUES(? , ?);"
	        var userDTO = null;
	        db.all(sqlRequest, [username, password],(err,row)=>{
	            if(err){
	                console.log('Erreur UserDAO.signout() => '+sqlRequest+' : '+err);
	            }else{
                    userDTO = new UserDTO();
                    userDTO.setName(row.username);
                    userDTO.setPassword(row.password);
	                resolve(userDTO);
	                console.log("User been registered ! <3 ;)");
	            }
	        });
	    });
	}
		
}

module.exports = new UserDAO();