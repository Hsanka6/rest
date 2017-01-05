"use strict"
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = 3000


let app = express()

//logs requests to console


const mysql      = require('mysql');
const database = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sample'
});

database.connect();

// database.query('SHOW TABLES', function(err, rows, fields) {
//   if (err) throw err;
 
//   console.log('The solution is: ', rows, '\nfields', fields );
// });

// Create

app.post("", function(req, res){
	res.send('done')

})

//Read
app.get("", function(req, res){
	res.send('done')

})

//Update

app.put("", function(req, res){
	res.send('done')

})


//Delete

app.delete("", function(req, res){
	res.send('done')

})










app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:true
}))

app.get('/', function(req,res){
	console.log(req)
	res.send('hello and welcome to our api')
})

app.post('/', function(req,res){
	if(req.body.name)
	{

		database.query("INSERT INTO names VALUES(  ' " + req.body.name + " ' );")
		res.send("success")

	}
	else
	{
		res.send("fail")
	}
})

app.listen(3000,function(err){
	if(err)
	{
		return console.log(err)
	}
	
	console.log('listening on port', PORT)
})

