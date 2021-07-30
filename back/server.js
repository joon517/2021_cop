const express = require('express');
const winston = require('winston');
const Router = require('./routes/index')
const app = express();
const port = 3000;
const logger = winston.createLogger();
// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyparser.json)

app.use('/', Router);

//TODO port => process.env.port 처리하기
app.listen( port, () => {
    console.log(`${port} 포트로 서버 실행중...`);
});
