const express = require('express');
const router = express.Router();

const deleteRouter = require('./delete');
const selectRouter = require('./select');

const authRouter = require('./auth');
const uploadRouter = require('./upload');
const updateRouter = require('./update');

router.use('/app/v1/delete/', (req, res) => {
    deleteRouter(req, res);
})
router.use('/app/v1/auth/', (req, res) => {
    authRouter(req, res);
})
router.use('/app/v1/upload/', (req, res) => {
    uploadRouter(req, res);
})
router.use('/app/v1/select/', (req, res) => {
    selectRouter(req, res);
})
router.use('/app/v1/update/', (req, res) => {
    updateRouter(req, res);
})
router.get('/', (req, res) => {
    res.send('Here is one')
})

module.exports = router;
