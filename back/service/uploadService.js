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

const QueryUpdate = (Query, res) => {
    // MariaDB 연결해서 쿼리 날리는 부분
    pool.getConnection()
    .then(conn => {
            conn.query(Query)
            .catch(err => res.status(500).send(err))
        conn.release()
    })
    .catch(err => {
        res.status(500).send("Fail Update")
        // console.error(err)
    })
    .finally( () => {
        res.status(200).send("Success Update");
    })
}
exports.uploadCommonBoard = (req, res) => {
    console.log(req);
    const result = queryString.tableInsertQuery.boardCommonTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadVoteBoard = (req, res) => {
    const result = queryString.tableInsertQuery.voteBoardTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadComment = (req, res) => {
    const result = queryString.tableInsertQuery.commentsTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadUser = (req, res) => {
    const result = queryString.tableInsertQuery.userTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadBookmarkList = (req, res) => {
    const result = queryString.tableInsertQuery.bookmarkListTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadCoinAssetList = (req, res) => {
    const result = queryString.tableInsertQuery.coinAssetListTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadStockAssetList = (req, res) => {
    const result = queryString.tableInsertQuery.stockAssetListTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadRanking = (req, res) => {
    const result = queryString.tableInsertQuery.rankingTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadShortPost = (req, res) => {
    const result = queryString.tableInsertQuery.shortPostTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadFollowing = (req, res) => {
    const result = queryString.tableInsertQuery.followingTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadFollower = (req, res) => {
    const result = queryString.tableInsertQuery.followerTableInsertQuery(req.body)
    QueryUpdate(result, res);
}

exports.uploadVirtualAccountNumber = (req, res) => {
    const result = queryString.tableInsertQuery.virtualAccountNumberListTableInsertQuery(req.body)
    QueryUpdate(result, res);
}