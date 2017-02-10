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
                }else{
                    console.log('SQL table user initialized.')
                }
            })
        }else{
            console.log('table user Already exists.')
        }
    });
}


module.exports = new UserDAO();