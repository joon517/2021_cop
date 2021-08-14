const queryString = require('../modules/query')
const mariadb = require('mariadb')

// TODO procces.env처리
// TODO AWS 데이터베이스 연결
const pool = mariadb.createPool({
    host: "127.0.0.1",
    user: "kimyoungwoo",
    port: 3306,
    database: "mysql",
    password: "!qksgufahs2"
})

const QueryHandler = (Query, res) => {
    // MariaDB 연결해서 쿼리 날리는 부분
    pool.getConnection()
    .then(conn => {
            conn.query(Query)
            .catch(err => console.error(err))
        conn.release()
    })
    .catch(err => {
        res.status(500).send("Fail Insert")
        console.error(err)
    })
    .finally( () => {
        res.status(200).send("Success Insert");
    })
}
exports.deleteFollower = (req, res) => {
    const result = queryString.deleteQuery.followerTableDropQuery(req.body);
    QueryHandler(result, res);
}

exports.deleteFollowing = (req, res) => {
    const result = queryString.deleteQuery.followingTableDropQuery(req.body)
    QueryHandler(result, res);
}
