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

// TODO 에러 핸들 처리 로직 다시짜기
const QueryHandler = (Query, res) => {
    // MariaDB 연결해서 쿼리 날리는 부분
    pool.getConnection()
    .then(conn => {
        conn.query(Query)
        .then(result => {
            res.status(200).json({
                "result" : result
            });
        })
    })
    .catch(err => res.status(500).json({"err": err}))
}
exports.selectCommonBoard = (req, res) => {
    // console.log(req);
    // TODO Post_id 생성 로직 추가
    const result = queryString.selectTableQuery.boardCommonTableSelectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectVoteBoard = (req, res) => {
    const result = queryString.selectTableQuery.voteBoardTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectComment = (req, res) => {
    const result = queryString.selectTableQuery.commentsTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectUser = (req, res) => {
    const result = queryString.selectTableQuery.userTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectBookmarkList = (req, res) => {
    const result = queryString.selectTableQuery.bookmarkListTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectCoinAssetList = (req, res) => {
    const result = queryString.selectTableQuery.coinAssetListTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectStockAssetList = (req, res) => {
    const result = queryString.selectTableQuery.stockAssetListTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectRanking = (req, res) => {
    const result = queryString.selectTableQuery.rankingTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectShortPost = (req, res) => {
    const result = queryString.selectTableQuery.shortPostTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectFollowing = (req, res) => {
    const result = queryString.selectTableQuery.followingTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectFollower = (req, res) => {
    const result = queryString.selectTableQuery.followerTableselectQuery(req.body)
    QueryHandler(result, res);
}

exports.selectVirtualAccountNumber = (req, res) => {
    const result = queryString.selectTableQuery.virtualAccountNumberListTableselectQuery(req.body)
    QueryHandler(result, res);
}