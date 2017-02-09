/**
 * Created by Dimsurf on 09/02/2017.
 */

// BASE DE DONNEE SQLITE-3
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('TrelloDB.db');

db.serialize(function () {
    db.run("CREATE TABLE user (username, password, confPassword)");

    db.run("INSERT INTO user VALUES (?, ?, ?)", ['admin', 'admin', 'admin']);
});

db.close();


