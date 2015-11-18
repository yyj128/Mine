// mysql 모듈 불러오기
var mysql = require('mysql');

// node.js 와 db 접속을 위한 설정 코드
var dbConnection = mysql.createConnection({
	host : 'localhost',	// 접속하고자 하는 서버 url
	port : 3306,
	user : 'root',
	password : '13109354',
	database : 'mine'  // 접속하고자 하는 database
});

// db 연결
dbConnection.connect(function(err){
	if(err){
		console.error('mysql connection error');
		console.error(err);
		throw err;
	} 
	else {
		console.log('db connection');
	}
})