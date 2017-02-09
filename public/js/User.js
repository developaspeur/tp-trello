/**
* Classe Task
* id        : Integer
* name     	: String
* password  : String
* _tasks    : [Task]
*/

class User{
	constructor(id){
		this = {
			id: id || null,
			name: null,
			password: null,
			_tasks: null
		};
	}

	// Getters and setters
	getId(){
		return this.id;
	}
	setId(id){
		this.id = id;
		return this;
	}

	getName(){
		return this.name;
	}
	setName(name){
		this.name = name;
		return this;
	}

	getPassword(){
		return this.password;
	}
	setPassword(password){
		this.password = password;
		return this;
	}

	// Tasks
	getTasks(){
		return this._tasks;
	}
	addTask(Task){
		if (this._tasks === null)
			this._tasks = [];
		this._tasks.push(Task.getId());
		this._tasks[Task.getId()] = Task;
		return this;
	}
	removeFile(Task){
    if (this._tasks !== null)
      this._tasks.splice(Task.getId(), 1);
    return this;
  }

}
module.exports=User;