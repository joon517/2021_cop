const mariadb = require('mariadb')
const queryString = require('../modules/query')

const color = ['빨강', '주황', '노랑', '초록', '파랑', '남색', '보라']
// TODO 명사 추가

// TODO 파일 삭제 예정
const pool = mariadb.createPool({
    host: "127.0.0.1", 
    user:  "kimyoungwoo", 
    port:3306,
    database:"mysql",
    password: "!qksgufahs2" 
})
// CREATE USER 'kimyoungwoo'@'%' identified by '!qksgufahs2';
// GRANT ALL PRIVILEGES ON *.* TO kimyoungwoo@'localhost' IDENTIFIED BY '!qksgufahs2';

// 테이블 삭제
const dropTable = () => {
    pool.getConnection()
    .then(conn => {
        for ( var i = 0 ; i < queryString.dropTableQuery.dropAllTables.length; i++){
            console.log(`DROP TABLE IF EXISTS ${queryString.dropTableQuery.dropAllTables[i]};`)
            conn.query(`DROP TABLE IF EXISTS ${queryString.dropTableQuery.dropAllTables[i]};`)
            .catch(err => console.error(err))
        }
        conn.release();
    })
    .catch(err => {
        console.error(err)
    })
}

// 테이블 만드는 함수
const makeTable = () => {
    pool.getConnection()
    .then(conn => {
        // rows = conn.query('show tables;')
        // .then(res => {
        //     console.log(res);
        // })
        for (var input in queryString.tableCreateQuery) {
            console.log(queryString.tableCreateQuery[input])
            conn.query(queryString.tableCreateQuery[input])
            .catch(err => {
                console.error(err);
            })
        }
        conn.release();
    })
    .catch(err => {
        console.error(err)
    })
}

const DBConnect = () => {
    pool.getConnection()
    .then(conn => {
        console.log("connection try")
        // conn.query(queryString.tableCreateQuery.boardCommonTableCreateQuery);
    })
    .catch(err => {
        console.error(err)
    })
}

// TODO 랜덤 닉네임 생성 구현
const makeRandomNickname = (req, res) => {

}

// TODO 뱃지 부여
const grantBadge = (req, res) => {
    const body = req.body;
    if (body.stockAsset > 1000000000 || body.coinAsset > 1000000000){
        grantBadgeColor(Blue);
    }
}
// dropTable();
// makeTable();