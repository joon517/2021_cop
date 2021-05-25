const express = require('express');
const router = express.Router();

const binanceRouter = require('./binance');
const upbitRouter = require('./upbit');

router.use('/app/v1/binance/', (req, res) => {
    binanceRouter(req, res);
});
router.use('/app/v1/upbit/', (req, res) => {
    upbitRouter(req, res);
});
router.get('/', (req, res) => {
    res.send('Here is one')
})
module.exports = router;
