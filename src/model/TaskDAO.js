/**
 * Created by Dimsurf on 09/02/2017.
 */
const sqlite = require('sqlite3').verbose();
const fs = require('fs');
const TaskDTO = require('./TaskDTO');

var fileDB = "content/Trello.db";
var db = new sqlite.Database(fileDB);
var exists = fs.existsSync(fileDB);

class TaskDAO {
	constructor(){
	    db.serialize(function(){
	        if(!exists){
	            db.run("CREATE TABLE task (" +
	                "task_id INTEGER PRIMARY KEY AUTOINCREMENT," +
	                "title VARCHAR(80)," +
	                "date DATETIME," +
	                "content TEXT" +
	                ");",function(err){
	                if (err){
	                    console.log('create DB task Error : '+err);
	                    // db.run("DROP TABLE user")
	                }else{
	                    console.log('SQL table task initialized.')
	                }
	            })
	        }else{
	            console.log('SQL table task Already exists.')
	        }
	    });
	}

	findAll(){
	   return new Promise((resolve,reject)=>{
	        var sqlRequest = "SELECT * FROM task;"
	        var TaskDTOs = [];
	        db.all(sqlRequest,(err,rows)=>{

	            if(err){
	                console.log('SELECT user Error : '+err);
	            }else{
	                rows.forEach((row)=>{
	                    var taskDTO = new TaskDTO(row.task_id);
	                    taskDTO.setTitle(row.title);
	                    taskDTO.setDate(row.date);
	                    taskDTO.setContent(row.content);
	                    TaskDTOs.push(taskDTO);
	                });
	                resolve(TaskDTOs);
	            }
	        });
	    });
	}

	find(id){
		 return new Promise((resolve,reject)=>{
	        var sqlRequest = "SELECT * FROM task where id=?;"
	        var userDTO = null;
	        db.all(sqlRequest, [id],(err,row)=>{
	            if(err){
	                console.log('Erreur TaskDAO.find() => '+sqlRequest+' : '+err);
	            }else{
                    taskDTO = new UserDTO(id);
                    taskDTO.setName(row.username);
                    taskDTO.setPassword(row.password);
	                resolve(taskDTO);
	            }
	        });
	    });
	}

	remove(id){
		 return new Promise((resolve,reject)=>{
	        var sqlRequest = "DELETE FROM task WHERE id=?;"
	        var taskDTO = null;
	        db.all(sqlRequest, [id],(err,row)=>{
	            if(err){
	                console.log('Erreur TaskDAO.remove() => '+sqlRequest+' : '+err);
	            }else{
	                resolve(this);
	                console.log("Task been removed ! <3 ;)");
	            }
	        });
	    });
	}

	insert(title, date, content){
		 return new Promise((resolve,reject)=>{
	        var sqlRequest = "INSERT INTO task(title,date,content) VALUES(?,?,?);"
	        var taskDTO = null;
	        db.all(sqlRequest, [title, date, content],(err,row)=>{
	            if(err){
	                console.log('Erreur TaskDAO.insert() => '+sqlRequest+' : '+err);
	            }else{
	                resolve(this);
	                console.log("Task been inserted ! <3 ;)");
	            }
	        });
	    });
	}
		
}

module.exports = new TaskDAO();