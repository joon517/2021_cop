const express = require('express');
const router = express.Router();


// Import Function
const updateService = require('../../service/updateService');

//http://localhost:3000/app/v1/update/likes
router.post('/likes', (req, res) => {
    updateService.updateLikes(req, res);
})

//http://localhost:3000/app/v1/update/dislikes
router.post('/dislikes', (req, res) => {
    updateService.updateDislikes(req, res);
})

//http://localhost:3000/app/v1/update/board
router.post('/board', (req, res) => {
    updateService.updateBoard(req, res);
})

//http://localhost:3000/app/v1/update/comment
router.post('/comment', (req, res) => {
    updateService.updateComment(req, res);
})

//http://localhost:3000/app/v1/update/voteYes
router.post('/voteYes', (req, res) => {
    updateService.updateVoteYes(req, res);
})

//http://localhost:3000/app/v1/update/voteNo
router.post('/voteNo', (req, res) => {
    updateService.updateVoteNo(req, res);
})

//http://localhost:3000/app/v1/update/bookmark
router.post('/bookmark', (req, res) => {
    updateService.updateBookmark(req, res);
})

//http://localhost:3000/app/v1/update/following
router.post('/following', (req, res) => {
    updateService.updateFollowing(req, res);
})

//http://localhost:3000/app/v1/update/follower
router.post('/follower', (req, res) => {
    updateService.updateFollower(req, res);
})

router.post('/', async (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
