//express ����� �ҷ�����
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/view/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

// ����� ���� �� Client�� ���� ������ ����
router.get("/",function(req,res){
  res.sendFile(path + "Login.html");
});

app.use("/",router);

// ��Ʈ ���� �� ���� ���� ����
app.listen(6180, function(){
	console.log('Server Start / port : 6180');
});
