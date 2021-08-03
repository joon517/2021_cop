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

// TODO 시간부분 NOW()로 할지 고민 해보기

const QueryInsert = (Query, res) => {
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
exports.uploadCommonBoard = (req, res) => {
    const result = queryString.tableInsertQuery.boardCommonTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadVoteBoard = (req, res) => {
    const result = queryString.tableInsertQuery.voteBoardTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadComment = (req, res) => {
    const result = queryString.tableInsertQuery.commentsTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadUser = (req, res) => {
    const result = queryString.tableInsertQuery.userTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadBookmarkList = (req, res) => {
    const result = queryString.tableInsertQuery.bookmarkListTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadCoinAssetList = (req, res) => {
    const result = queryString.tableInsertQuery.coinAssetListTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadStockAssetList = (req, res) => {
    const result = queryString.tableInsertQuery.stockAssetListTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadRanking = (req, res) => {
    const result = queryString.tableInsertQuery.rankingTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadShortPost = (req, res) => {
    const result = queryString.tableInsertQuery.shortPostTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadFollowing = (req, res) => {
    const result = queryString.tableInsertQuery.followingTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadFollower = (req, res) => {
    const result = queryString.tableInsertQuery.followerTableInsertQuery(req.body)
    QueryInsert(result, res);
}

exports.uploadVirtualAccountNumber = (req, res) => {
    const result = queryString.tableInsertQuery.virtualAccountNumberListTableInsertQuery(req.body)
    QueryInsert(result, res);
}