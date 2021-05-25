// Get Controller
const upbitController = require('../../controllers/upbit/upbit');

const func = {
    //내 계좌 조회
    getMyAccount: (req, res) => {
        upbitController.getUpbitAccount(req, res);
    },
    // 주문 가능 정보 조회
    getOrderChance: (req, res) => {
        upbitController.getUpbitOrderChance(req, res);
    },
    getUpbitBTC: (req, res) => {
        upbitController.getUpbitBTCPrice(req, res);
    },
    upbitInit: (req, res) => {
        upbitController.upbitInit(req, res);
    }
}

module.exports = func;


