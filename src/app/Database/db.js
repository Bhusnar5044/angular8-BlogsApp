const mysql = require('mysql');
const path = require('path');
const bodyparser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const projectenv = dotenv.config({path: path.resolve(__dirname, '../../../.env')})

var app = express();
// app.use(bodyparser.json());

app.use(bodyparser.json({limit: '10mb', extended: true}));
app.use(bodyparser.urlencoded({limit: '10mb', extended: true}));

var connection = mysql.createConnection({
  host     : process.env.MYSQL_DB_HOST,
  user     : process.env.MYSQL_DB_USER,
  password : process.env.MYSQL_DB_PASSWORD,
  database : process.env.MYSQL_DATABASE
});

connection.connect((error)=>{
  if(!error)
      console.log('connection done');
  else
      console.log(error);
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.API_PORT,()=>console.log('express server running on port ' + process.env.API_PORT));

app.get('/blogs',(req,res)=>{
    connection.query('SELECT * from trial', function (error, results, fields) {
        if (!error) {
            console.log(results);
            res.send(results);
        }
        else
        console.log(error);
    });
});  

// app.post('/signup',(req,res)=>{
//     let member = req.body;
//     var sql = 'INSERT INTO `users`(`email`, `password`, `bio`, `gender`, `age`, `first_name`, `las_name`) VALUES(?,?,?,?,?,?,?)';
//     connection.query(sql,[member.email, member.password, member.bio, member.gender, member.age, member.first_name, member.las_name],(err,rows,fields)=>{
//         if(!err)
//           res.send(rows);
//         else
//           console.log(err);
//     });
//   });


  app.put('/verify_user',(req,res)=>{
    let data = req.body;
    var sql = 'UPDATE member SET ? WHERE ?';
    connection.query(sql,[{verification_status: data.verification_status},{verification_id: data.verification_id}],(err,rows,fields)=>{
        if(!err)
          res.send(rows);
        else
          console.log(err);
    });
  });

//   app.delete('/delete_post',(req,res)=>{
//     let data = req.body;
//     var sql = 'DELETE posts WHERE post_id=?';
//     connection.query(sql,[{verification_status: data.verification_status},{verification_id: data.verification_id}],(err,rows,fields)=>{
//         if(!err)
//           res.send(rows);
//         else
//           console.log(err);
//     });
//   });

  /*
  loginHandler = (event) => {
    event.preventDefault();

    fetch(process.env.API_URL + '/blogs')
     .then(response => {
            console.log(response)
    });
  }
  */ 
