var express = require('express');

var app = express();

app.use('/',function(req,res){
	res.sendFile(__dirname + "/ReadMe.txt");
});

app.listen(3000,function(res,err){
	console.log('Started on port 3000');
});