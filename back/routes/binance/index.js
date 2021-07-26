const express = require('express');
const router = express.Router();

// Import Function
const binanceService = require('../../service/binanceService');

//http://localhost:3000/app/v1/binance/getBinanceBTC
router.get('/getBinanceBTC', (req, res) => {
    binanceService.getBinanceBTC(req, res);
});

router.get('/', (req, res) => {
    res.json({"dd" : "ddd"})
})
module.exports = router;
