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
        }
        case "shortPost" : {
            uploadService.uploadVoteBoard(req, res);
        }
        case "comment" : {
            uploadService.uploadComment(req, res);
        }
    }
})

router.post('/', async (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
