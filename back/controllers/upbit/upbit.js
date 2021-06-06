const upbitService = require('../../service/upbitservice');

exports.getUpbitBTCPrice = async (req, res) => {
  await upbitService.getUpbitBTCPrice(req, res);
}

exports.getUpbitETHPrice = async (req, res) => {
  await upbitService.getUpbitETHPrice(req, res);
}

exports.getUpbitXRPPrice = async (req, res) => {
  await upbitService.getUpbitXRPPrice(req, res);
}

exports.getUpbitAccount = async (req, res) => {
  await upbitService.getUpbitAccount(req, res);
}

exports.upbitInit = async (req, res) => {
  await upbitService.upbitInit(req, res);
}

exports.getUpbitOrderChance = async (req, res) => {
  await upbitService.getOrderChanceKRWBTC(req, res);
}