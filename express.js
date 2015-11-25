//express 모듈을 불러오기
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/view/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

// 라우팅 설정 및 Client에 보낼 데이터 설정
router.get("/",function(req,res){
  res.sendFile(path + "Login.html");
});

app.use("/",router);

// 포트 설정 및 시작 동작 설정
app.listen(6180, function(){
	console.log('Server Start / port : 6180');
});
