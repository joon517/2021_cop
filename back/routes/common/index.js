const express = require('express');
const router = express.Router();

// Import Function
const func = require('../../service/commonService')

router.get('/', (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
