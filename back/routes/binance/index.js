const express = require('express');
const router = express.Router();

// Import Function
const func = require('../../controllers/binance/binance')

//http://localhost:3000/app/v1/binance/getBinanceBTC
router.get('/getBinanceBTC', (req, res) => {
    func.getBinanceBTC(req, res);
});

router.get('/', (req, res) => {
    res.json({"dd" : "ddd"})
})
module.exports = router;
