const express = require('express');
const router = express.Router();

const binanceRouter = require('./binance');
const upbitRouter = require('./upbit');
const deleteRouter = require('./delete');
const authRouter = require('./auth');
const uploadRouter = require('./upload');
const updateRouter = require('./update');

router.use('/app/v1/binance/', (req, res) => {
    binanceRouter(req, res);
});
router.use('/app/v1/upbit/', (req, res) => {
    upbitRouter(req, res);
});
router.use('/app/v1/delete/', (req, res) => {
    deleteRouter(req, res);
})
router.use('/app/v1/auth/', (req, res) => {
    authRouter(req, res);
})
router.use('/app/v1/upload/', (req, res) => {
    uploadRouter(req, res);
})
router.use('/app/v1/update/', (req, res) => {
    updateRouter(req, res);
})
router.get('/', (req, res) => {
    res.send('Here is one')
})

module.exports = router;
