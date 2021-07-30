const express = require('express');
const router = express.Router();


// Import Function
const updateService = require('../../service/updateService');

//http://localhost:3000/app/v1/update/likes
router.get('/likes', (req, res) => {
    updateService.updateLikes(req, res);
})

//http://localhost:3000/app/v1/update/dislikes
router.get('/dislikes', (req, res) => {
    updateService.updateDislikes(req, res);
})

//http://localhost:3000/app/v1/update/board
router.get('/board', (req, res) => {
    updateService.updateBoard(req, res);
})

//http://localhost:3000/app/v1/update/comment
router.get('/comment', (req, res) => {
    updateService.updateComment(req, res);
})

//http://localhost:3000/app/v1/update/voteYes
router.get('/voteYes', (req, res) => {
    updateService.updateVoteYes(req, res);
})

//http://localhost:3000/app/v1/update/voteNo
router.get('/voteNo', (req, res) => {
    updateService.updateVoteNo(req, res);
})

//http://localhost:3000/app/v1/update/bookmark
router.get('/bookmark', (req, res) => {
    updateService.updateBookmark(req, res);
})

//http://localhost:3000/app/v1/update/following
router.get('/following', (req, res) => {
    updateService.updateFollowing(req, res);
})

//http://localhost:3000/app/v1/update/follower
router.get('/follower', (req, res) => {
    updateService.updateFollower(req, res);
})

router.get('/', async (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
