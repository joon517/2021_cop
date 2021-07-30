const express = require('express');
const router = express.Router();


// Import Function
const uploadService = require('../../service/uploadService');

//http://localhost:3000/app/v1/upload/commonBoard
router.post('/commonBoard', (req, res) => {
    uploadService.uploadCommonBoard(req, res);
})

//http://localhost:3000/app/v1/upload/voteBoard
router.post('/voteBoard', (req, res) => {
    uploadService.uploadVoteBoard(req, res);
})

//http://localhost:3000/app/v1/upload/comment
router.post('/comment', (req, res) => {
    uploadService.uploadComment(req, res);
})

router.post('/', async (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
