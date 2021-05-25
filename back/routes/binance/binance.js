
// Get Controller
const binanceController = require('../../controllers/binance/binance');
const func = {
    getBinanceBTC : (req, res) => {
        console.log('get binance')
        binanceController.getBinanceBTCPrice(req, res)
    }
}

module.exports = func;