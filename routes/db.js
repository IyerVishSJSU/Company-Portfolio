var mysql      = require('mysql');
var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'linux2015',
  database : 'company_profile'
});
connection.connect();

router.post('/saveinfo', function(req, res) {
	var status = "success";
	
	connection.query("INSERT INTO download_records (firstname, lastname, email) VALUES ( '" +  req.body.firstname + "' , " +
			"'" + req.body.lastname + "' , '" + req.body.email + "' )",
			function(err, status) {
			if (!err)
				console.log(status);
			else
				console.log(err);
		
	});
	
	res.send({result : status});
});

module.exports = router;