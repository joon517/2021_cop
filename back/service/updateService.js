const queryString = require('../models/query')
const mariadb = require('mariadb')

// TODO procces.env처리
// TODO AWS 데이터베이스 연결
const pool = mariadb.createPool({
    host: "127.0.0.1", 
    user: "kimyoungwoo",
    port: 3306,
    database:"mysql",
    password: "!qksgufahs2" 
})

const QueryInsert = (Query, res) => {
    // MariaDB 연결해서 쿼리 날리는 부분
    pool.getConnection()
    .then(conn => {
            conn.query(Query)
            .catch(err => console.error(err))
        conn.end()
    })
    .catch(err => {
        res.status(500).send("Fail Insert")
        console.error(err)
        conn.end();
    })
    .finally( () => {
        res.status(200).send("Success Insert");
    })
}

exports.updateBoard = (req, res) => {
    // TODO 게시판 수정 기능 구현
    const result = queryString.updateQuery
    QueryInsert(result, res);
}

exports.updateComment = (req, res) => {
    // TODO 댓글 수정 기능 구현
}

exports.updateLikes = (req, res) => {
    // TODO 좋아요 수정 기능 구현
}

exports.updateDislikes = (req, res) => {
    // TODO 싫어요 수정 기능 구현
}

exports.updateVoteYes = (req, res) => {
    // TODO 투표 "Y" 수정 기능 구현
}

exports.updateVoteNo = (req, res) => {
    // TODO 투표 "N" 수정 기능 구현
}

exports.updateBookmark = (req, res) => {
    // TODO 게시글 북마크 추가, 삭제 기능 구현
}

exports.updateFollowing = (req, res) => {
    // TODO 필로잉 추가, 삭제 기능 구현
}

exports.updateFollower = (req, res) => {
    // TODO 팔로잉 추가, 삭제 기능 구현
}