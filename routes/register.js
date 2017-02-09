/**
 * Created by Dimsurf on 09/02/2017.
 */

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {

    db.each("SELECT * FROM user", function (err, row) {
        console.log(row);
    });

    //res.send('respond with a resource');
    var name =  req.body.name;
    var password =  req.body.password;
    var confirPassword =  req.body.confirmPassword;
    console.log(name,password,confirPassword);
});

module.exports = router;