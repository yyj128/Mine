var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "Login.html");
});

app.use("/",router);

app.listen(6180,function(){
  console.log("server start / port 6180");
});