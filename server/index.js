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
app.get("/transact/:name/:names/:amt",function(req,res){
  var cust_1 = req.params.name;
  var cust_2 = req.params.names;
  var amount = req.params.amt;
  global.balance_1 = 0;
  global.balance_2 = 0;
  var flag = 0;
  console.log(cust_1,cust_2,amount);
  const sqlSearch_1="SELECT * FROM customers WHERE customers.name=(?)";
  db.query(sqlSearch_1,[cust_1],function(err,response){
    if(err)
    {
      
        console.log(err);
    }
    else
    {
      
        //console.log("Entry saved into DB"); 
        balance_1 = response[0].balance;
        const sqlSearch_2="SELECT * FROM customers WHERE customers.name=(?)";
        db.query(sqlSearch_2,[cust_2],function(err,response){
          if(err)
          {
            
              console.log(err);
          }
          else
          {
              balance_2 = response[0].balance;
              console.log(balance_1,balance_2);
              console.log(amount);
              balance_1 = Number(balance_1) - Number(amount);
              balance_2 = Number(balance_2) + Number(amount);
              console.log(balance_1,balance_2);
              if(Number(balance_1)<0)
              {
                console.log("insuff");
                res.send({"flag":flag});
                
              }
              else{
                flag =1;
                console.log("success");
                const sqlUpdate_1 = "UPDATE customers SET balance=(?) WHERE name=(?)"
                db.query(sqlUpdate_1,[balance_1,cust_1],function(err,reply){
                  if(err)
                  {
                      console.log(err);
                  }
                  else
                  {
                    console.log(reply);
                    const sqlUpdate_2 = "UPDATE customers SET balance=(?) WHERE name=(?)"
                    db.query(sqlUpdate_2,[balance_2,cust_2],function(err,reply){
                      if(err)
                      {
                          console.log(err);
                      }
                      else
                      {
                        console.log(reply);
                        res.send({"flag":flag});
                      }
                    });
                  }
                });

                
              }
          }
        });
    }
});


})
app.listen(3001,function(){
  console.log("Port 3001 up and running!");
})