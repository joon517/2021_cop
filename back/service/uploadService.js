const queryString = require('../models/query')

// req_body 예시
// {
// "post_id" : 123456798,
// "comment_id" : 12345,
// "comment" : "hello world",
// "content" : "something",
// "username" : "ywk", 
// "date" : "2021-07-30",
// "category" : "shortPost", 
// "pics" : "lsdkdjlf.png",
// "files" : "sldkjlsf.png"
// }

exports.uploadCommonBoard = (req, res) => {
    // TODO 공통 게시판 업로드 기능 구현
    console.log(req.body);
    // TODO 함수 이름도 ${req.함수이름}으로 바꾸기
    const result = queryString.tableInsertQuery.commentsTableInsertQuery(req.body)
    console.log(result);
    console.log(typeof(result))
    res.status(200).send("hello world");

    // TODO MariaDB연결해서 쿼리 날리는 부분 추가
    
}

exports.uploadVoteBoard = (req, res) => {
    // TODO 투표 게시판 업로드 기능 구현
}

exports.uploadComment = (req, res) => {
    // TODO 댓글 업로드 기능 구현
}

