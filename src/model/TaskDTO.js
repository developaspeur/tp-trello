/**
* Classe Task
* id        : Integer
* title     : String
* content   : String
* DateTask  : Date()
* _files    : [File]
* _users    : [User]
*/

class Task{
	constructor(id){
		this.id = id || null;
		this.title = null;
		this.content = null;
    this.DateTask = new Date();
    this._files = null;
    this._users =null;
  }

  // Getters and setters
	getId(){
		return this.id;
	}
	setId(id){
		this.id = id;
		return this;
	}

	getTitle(){
		return this.title;
	}
	setTitle(title){
		this.title = title;
		return this;
	}

	getContent(){
		return this.content;
	}
	setContent(content){
		this.content = content;
		return this;
	}

  getDate(){
    return this.DateTask;
  }
  setDate(DateTask){
    this.DateTask = DateTask;
    return this;
  }

  // Files
	getFiles(){
		return this._files;
	}
	addFile(File){
		if (this._files === null)
      this._files = [];
    this._files.push(File.getId());
    this._files[File.getId()] = File;
		return this;
	}
  removeFile(File){
    if (this._files !== null)
      this._files.splice(File.getId(), 1);
    return this;
  }

  // Users
  getUsers(){
    return this._users;
  }
  addUser(User){
    if (this._users === null)
      this._users = [];
    this._users.push(User.getId());
    this._users[User.getId()] = User;
    return this;
  }
  removeUser(User){
    if (this._users !== null)
      this._users.splice(User.getId(), 1);
    return this;
  }
}

module.exports=Task;