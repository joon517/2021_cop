const express = require('express');
const router = express.Router();


// Import Function
const uploadService = require('../../service/uploadService');

//http://localhost:3000/app/v1/upload/commonBoard
router.get('/commonBoard', (req, res) => {
    uploadService.uploadCommonBoard(req, res);
})

//http://localhost:3000/app/v1/upload/voteBoard
router.get('/voteBoard', (req, res) => {
    uploadService.uploadVoteBoard(req, res);
})

//http://localhost:3000/app/v1/upload/comment
router.get('/comment', (req, res) => {
    uploadService.uploadComment(req, res);
})

router.get('/', async (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
