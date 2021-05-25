const express = require('express');
const router = express.Router();

// Import Function
const func = require('./upbit')

//http://localhost:3000/app/v1/upbit/getUpbitBTCPrice
router.get('/getUpbitBTC', async (req, res) => {
    await func.getUpbitBTC(req, res);
});

//http://localhost:3000/app/v1/upbit/getUpbitAccount
router.get('/getUpbitAccount', (req, res) => {
    func.getMyAccount(req, res);
})

//http://localhost:3000/app/v1/upbit/getUpbitOrderChance
router.get('/getUpbitOrderChance', (req, res) => {
    func.getOrderChance(req, res);
})

router.get('/upbitInit', (req, res) => {
    func.upbitInit(req, res);
})

router.get('/', (req, res) => {
    res.json({"dd" : "ddd"})
})
module.exports = router;
