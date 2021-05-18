const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bankdb"
})

app.get("/",function(req,res){
  res.send("hi");
})
app.get("/api/get",function(req,res){
  const sqlShow = "SELECT * FROM customers";
  db.query(sqlShow,function(err,results){
    if(err){console.log(err)};
    res.send(results);
  })
})
app.post("/api/insert",function(req,res){
  console.log("hi");
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.bal);
  console.log(req.body.type);
  const name = req.body.name;
  const bal = req.body.bal;
  const type = req.body.type;
  const sqlInsert = "INSERT INTO customers (name,balance,type) VALUES (?,?,?)"
  db.query(sqlInsert, [name,bal,type], function(err,results){
    if(err){console.log(err)}
    console.log(results);
    res.send("All good")
  })
  })

app.get("/custinfo/:inp",function(req,res){
  var name = req.params.inp;
  const sqlSearch="SELECT * FROM customers WHERE customers.name=(?)";
  db.query(sqlSearch,[name],function(err,response){
    if(err)
    {
        console.log(err);
    }
    else
    {
        //console.log("Entry saved into DB"); 
        res.send(response);
    }
});

})
app.listen(3001,function(){
  console.log("Port 3001 up and running!");
})