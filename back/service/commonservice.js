const mariadb = require('mariadb')
const queryString = require('../models/query')


//TODO procces.env처리
const pool = mariadb.createPool({
    host: "127.0.0.1", 
    user:  process.env.USER, 
    port:3306,
    database:"mysql",
    password: "!qksgufahs2" 
})

// 테이블 삭제
const dropTable = () => {
    pool.getConnection()
    .then(conn => {
        for ( var i = 0 ; i < queryString.dropTableQuery.dropAllTables.length; i++){
            console.log(`DROP TABLE IF EXISTS ${queryString.dropTableQuery.dropAllTables[i]};`)
            conn.query(`DROP TABLE IF EXISTS ${queryString.dropTableQuery.dropAllTables[i]};`)
            .catch(err => console.error(err))
        }
        conn.end()
    })
    .catch(err => {
        console.error(err)
        conn.end();
    })
    return;
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
        conn.end();
    })
    .catch(err => {
        console.error(err)
        conn.end();
    })
    return;
}

const DBConnect = () => {
    pool.getConnection()
    .then(conn => {
        console.log("connection try")
        // conn.query(queryString.tableCreateQuery.boardCommonTableCreateQuery);
    })
    .catch(err => {
        console.error(err)
        conn.end();
        return;
    })
    return;
}


exports.temp = (req, res) => {
    
}


// dropTable();
// makeTable();