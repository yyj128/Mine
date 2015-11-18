//express 모듈을 불러오기
var express = require('express');

var app = express();

// 라우팅 설정 및 Client에 보낼 데이터 설정
app.get('/', function(req, res){
	res.sendfile('Login.html');
});

// 포트 설정 및 시작 동작 설정
app.listen(6180, function(){
	console.log('Server Start');
});