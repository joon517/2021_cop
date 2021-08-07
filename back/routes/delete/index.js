const express = require('express');
const router = express.Router();

// Import Function
const deleteService = require('../../service/deleteService');

router.post('/:name', (req, res) => {
    const functionName = req.params.name;
    console.log(functionName);    
    switch (functionName) {
        case "following" : {
            deleteService.deleteFollowing(req, res);
            break;
        }
        case "follower" : {
            deleteService.deleteFollower(req, res);
            break;
        }
        default : {
            res.status(500).send("Wrong Approach");
            break;
        }
    }
})

router.post('/', (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
