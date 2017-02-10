/**
 * Created by Dimsurf on 09/02/2017.
 */

const sqlite = require('sqlite3').verbose();
const fs = require('fs');
const UserDTO = require('./UserDTO');

var fileDB = "content/Trello.db";
var db = new sqlite.Database(fileDB);
var exists = fs.existsSync(fileDB);

function UserDAO(){
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
                    db.run("DROP TABLE user")
                }else{
                    console.log('SQL table user initialized.')
                }
            })
        }else{
            console.log('SQL table product Already exists.')
        }
    });
}

UserDAO.prototype.findAll = ()=>{
   return new Promise((resolve,reject)=>{
        var sqlRequest = "SELECT user_id, username , password  FROM user;"
        var UserDTOs = [];
        db.all(sqlRequest,(err,rows)=>{
            if(err){
                console.log('SELECT user Error : '+err);
            }else{
                rows.forEach((row)=>{
                    var UserDTO = new UserDTO();
                    UserDTO.setId(row.user_id);
                    UserDTO.setName(row.username);
                    UserDTO.setPassword(row.password);
                    UserDTOs.push(UserDTO);
                });
                resolve(UserDTOs);
            }
        });
    });
};

module.exports = new UserDAO();