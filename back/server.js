const express = require('express');
const winston = require('winston');
const Router = require('./routes/index')
const app = express();
const cors = require('cors');

const {swaggerUi, specs} = require('./modules/swagger');

// TODO process.env 처리
const port = 4000;
const logger = winston.createLogger();

app.use(express.json());
app.use(cors());
app.use('/', Router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

//TODO port => process.env.port 처리하기
app.listen( port, () => {
    console.log(`${port} 포트로 서버 실행중...`);
});


