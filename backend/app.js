const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const path = require('path');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'react_app',
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
});

// app.get('/', (request, response) => {
// 	const sql = "select * from users"
// 	con.query(sql, function (err, result, fields) {
// 	if (err) throw err;
// 	response.send(result)
// 	});
// });

app.get("/api", (req, res) => {
  const sql = "select * from todo"
  con.query(sql, function (err, result, fields) {
	if (err) throw err;
  res.json(result);
	});
});

app.post("/todocreate",(req,res)=>{
  const uuids = req.body.uuid;
  const todovalues = req.body.todovalue;
  const todosql = "INSERT INTO `react_app`.`todo` SET ?";
  con.query(todosql, {uuid:uuids,todovalue:todovalues},function (err, result, fields){
    if (err)throw err;
    res.redirect('/api');
  });
});

app.get('/delete/:id',(req,res)=>{
	const sql = "DELETE FROM `react_app`.`todo` WHERE id = ?";
	con.query(sql,[req.params.id],function(err,result,fields){
		if (err) throw err;
		res.redirect('/api');
	})
});

app.post('/edit/:id',(req,res)=>{
  console.log(req.body)
	const sql = "UPDATE `react_app`.`todo` SET ? WHERE id = " + req.params.id;
	con.query(sql,req.body,function(err,result,fields){
	if (err) throw err;
  res.redirect('/api');
	})
});

app.post('/checked/:id',(req,res)=>{
  console.log(req.body)
	const sql = "UPDATE `react_app`.`todo` SET ? WHERE id = " + req.params.id;
	con.query(sql,req.body,function(err,result,fields){
	if (err) throw err;
  res.redirect('/api');
	})
});

module.exports = app;