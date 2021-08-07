const express = require('express');
const router = express.Router();


// Import Function
const updateService = require('../../service/updateService');

//http://localhost:3000/app/v1/update/name
router.post('/:name', (req, res) => {
    const functionName = req.params.name;
    console.log(functionName);    
    switch (functionName) {
        case "likes" : {
            updateService.updateLikes(req, res);
        }
        case "dislikes" : {
            updateService.updateDislikes(req, res);
        }
        case "board" : {
            updateService.updateBoard(req, res);
        }
        case "comment" : {
            updateService.updateComment(req, res);
        }
        case "voteYes" : {
            updateService.updateVoteYes(req, res);
        }
        case "voteNo" : {
            updateService.updateVoteNo(req, res);
        }
        case "bookmark" : {
            updateService.updateBookmark(req, res);
        }
        case "following" : {
            updateService.updateFollowing(req, res);
        }
        case "follower" : {
            updateService.updateFollower(req, res);
        }
        default : {
            res.status(500).send("Wrong Approach");
            break;
        }
    }
})

router.post('/', async (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
