const express = require('express');
const router = express.Router();


// Import Function
const uploadService = require('../../service/uploadService');

//http://localhost:3000/app/v1/upload/:parmams
router.post('/:name', (req, res) => {
    const functionName = req.params.name;
    console.log(functionName);    
    switch (functionName) {
        case "commonBoard" : {
            uploadService.uploadCommonBoard(req, res);
            break;
        }
        case "vote" : {
            uploadService.uploadVoteBoard(req, res);
            break;
        }
        case "comment" : {
            uploadService.uploadComment(req, res);
            break;
        }
        case "user" : {
            uploadService.uploadUser(req, res);
            break;
        }
        case "bookmarkList" : {
            uploadService.uploadBookmarkList(req, res);
            break;
        }
        case "coinAssetList" : {
            uploadService.uploadCoinAssetList(req, res);
            break;
        }
        case "stockAssetList" : {
            uploadService.uploadStockAssetList(req, res);
            break;
        }
        case "ranking" : {
            uploadService.uploadRanking(req, res);
            break;
        }
        case "shortPost" : {
            uploadService.uploadShortPost(req, res);
            break;
        }
        case "following" : {
            uploadService.uploadFollowing(req, res);
            break;
        }
        case "follower" : {
            uploadService.uploadFollower(req, res);
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
