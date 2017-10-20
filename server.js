var express = require('express');
var app = express();
//require mongojs
var mongojs = require('mongojs');
//showing which mongodb you are using 
var db = mongojs('cvlist', ['cvlist']);
var bodyParser = require('body-parser');
//hello world message from server 
// app.get('/', function(req, res){
//     res.send("Hello World From Server.js")
// });

//connecting server to view
app.use(express.static(__dirname + "/public"));
//parsing body 
app.use(bodyParser.json());


app.get('/cvlist', function(req, res) {
 console.log("I received a GET request")
 
db.cvlist.find(function (err,docs){
       console.log(docs);
       res.json(docs); 
     });
 });

 app.post('/cvlist' , function(req,res){
      console.log(req.body);
      db.cvlist.insert(req.body, function(err,doc){
            res.json(doc);

      })
 }); 

app.delete('/cvlist/:id' , function(req, res){
   var id = req.params.id;
   console.log(id);
     db.cvlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
     	res.json(doc);
     })
});

app.listen(3000);
console.log("Server running on port 3000");