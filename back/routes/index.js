const express = require('express');
const router = express.Router();

const binanceRouter = require('./binance');
const upbitRouter = require('./upbit');
const commonRouter = require('./common');
const authRouter = require('./auth');

router.use('/app/v1/binance/', (req, res) => {
    binanceRouter(req, res);
});
router.use('/app/v1/upbit/', (req, res) => {
    upbitRouter(req, res);
});
router.use('/app/v1/common/', (req, res) => {
    commonRouter(req, res);
})
router.use('/app/v1/auth/', (req, res) => {
    authRouter(req, res);
})

router.get('/', (req, res) => {
    res.send('Here is one')
})

module.exports = router;
