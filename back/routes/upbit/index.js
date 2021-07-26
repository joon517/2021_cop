const express = require('express');
const router = express.Router();

// Import Function
const upbitService = require('../../service/upbitService');

//http://localhost:3000/app/v1/upbit/getUpbitBTCPrice
router.get('/getUpbitBTC', async (req, res) => {
    await upbitService.getUpbitBTCPrice(req, res);
});

//http://localhost:3000/app/v1/upbit/getUpbitAccount
router.get('/getUpbitAccount', async (req, res) => {
    await upbitService.getUpbitAccount(req, res);
})

//http://localhost:3000/app/v1/upbit/getUpbitOrderChance
router.get('/getUpbitOrderChanceKRWBTC', async (req, res) => {
    await upbitService.getOrderChanceKRWBTC(req, res);
})

router.get('/upbitInit', async (req, res) => {
    await upbitService.upbitInit(req, res);
})

router.get('/', async (req, res) => {
    await res.json({"dd" : "ddd"})
})
module.exports = router;