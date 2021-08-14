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
                "result" : "Success"
            });
        })
        .catch(err => {
            res.status(500).json({"err": err})
        })
    })
    .catch(err => res.status(500).json({"err": err}))
}
exports.uploadCommonBoard = (req, res) => {
    // console.log(req);
    // TODO Post_id 생성 로직 추가
    req.body.post_id = 123;
    req.body.user_name= "shp";
    req.body.category = "shortPost"
    const result = queryString.insertTableQuery.boardCommonTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadVoteBoard = (req, res) => {
    const result = queryString.insertTableQuery.voteBoardTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadComment = (req, res) => {
    const result = queryString.insertTableQuery.commentsTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadUser = (req, res) => {
    const result = queryString.insertTableQuery.userTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadBookmarkList = (req, res) => {
    const result = queryString.insertTableQuery.bookmarkListTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadCoinAssetList = (req, res) => {
    const result = queryString.insertTableQuery.coinAssetListTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadStockAssetList = (req, res) => {
    const result = queryString.insertTableQuery.stockAssetListTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadRanking = (req, res) => {
    const result = queryString.insertTableQuery.rankingTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadShortPost = (req, res) => {
    const result = queryString.insertTableQuery.shortPostTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadFollowing = (req, res) => {
    const result = queryString.insertTableQuery.followingTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadFollower = (req, res) => {
    const result = queryString.insertTableQuery.followerTableInsertQuery(req.body)
    QueryHandler(result, res);
}

exports.uploadVirtualAccountNumber = (req, res) => {
    const result = queryString.insertTableQuery.virtualAccountNumberListTableInsertQuery(req.body)
    QueryHandler(result, res);
}