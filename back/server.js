const express = require('express');
const winston = require('winston');
const btcRouter = require('./routes/index')
const app = express();
const port = 3000;
const logger = winston.createLogger();
// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyparser.json)

app.use('/', btcRouter);
app.listen( port, () => {
    console.log(`${port} 포트로 서버 실행중...`);
});
