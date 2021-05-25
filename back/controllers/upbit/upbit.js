const upbitService = require('../../service/upbitservice');

exports.getUpbitBTCPrice = (req, res) => {
   upbitService.getUpbitBTCPrice(req, res);
}

exports.getUpbitETHPrice = (req, res) => {
  upbitService.getUpbitETHPrice(req, res);
}

exports.getUpbitXRPPrice = (req, res) => {
  upbitService.getUpbitXRPPrice(req, res);
}

exports.getUpbitAccount = (req, res) => {
  upbitService.getUpbitAccount(req, res);
}

exports.upbitInit = (req, res) => {
  upbitService.upbitInit(req, res);
}

exports.getUpbitOrderChance = (req, res) => {
  upbitService.getOrderChanceKRWBTC(req, res);
}