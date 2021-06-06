const express = require('express');
const router = express.Router();

// Import Function
const func = require('../../controllers/upbit/upbit')

//http://localhost:3000/app/v1/upbit/getUpbitBTCPrice
router.get('/getUpbitBTC', async (req, res) => {
    await func.getUpbitBTCPrice(req, res);
});

//http://localhost:3000/app/v1/upbit/getUpbitAccount
router.get('/getUpbitAccount', async (req, res) => {
    await func.getUpbitAccount(req, res);
})

//http://localhost:3000/app/v1/upbit/getUpbitOrderChance
router.get('/getUpbitOrderChance', async (req, res) => {
    await func.getOrderChance(req, res);
})

router.get('/upbitInit', async (req, res) => {
    await func.upbitInit(req, res);
})

router.get('/', async (req, res) => {
    await res.json({"dd" : "ddd"})
})
module.exports = router;