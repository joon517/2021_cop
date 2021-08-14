const express = require('express');
const router = express.Router();

// Import Function
const selectService = require('../../service/selectService');

//http://localhost:3000/app/v1/select/name
router.post('/:name', (req, res) => {
    const functionName = req.params.name;
    console.log(functionName);    
    switch (functionName) {
        case "commonBoard" : {
            selectService.selectCommonBoard(req, res);
            break;
        }
        case "vote" : {
            selectService.selectVoteBoard(req, res);
            break;
        }
        case "comment" : {
            selectService.selectComment(req, res);
            break;
        }
        case "user" : {
            selectService.selectUser(req, res);
            break;
        }
        case "bookmarkList" : {
            selectService.selectBookmarkList(req, res);
            break;
        }
        case "coinAssetList" : {
            selectService.selectCoinAssetList(req, res);
            break;
        }
        case "stockAssetList" : {
            selectService.selectStockAssetList(req, res);
            break;
        }
        case "ranking" : {
            selectService.selectRanking(req, res);
            break;
        }
        case "shortPost" : {
            selectService.selectShortPost(req, res);
            break;
        }
        case "following" : {
            selectService.selectFollowing(req, res);
            break;
        }
        case "follower" : {
            selectService.selectFollower(req, res);
            break;
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
