const express = require('express');
const router = express.Router();

//http://localhost:3000/app/v1/auth
router.use('/', require('../../service/auth'));

router.get('/', (req, res) => {
    res.status(404).send("Wrong")
})

module.exports = router;
