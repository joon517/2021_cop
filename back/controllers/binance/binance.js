const binanceService = require('../../service/binanceservice');

exports.getBinanceBTCPrice = async (req, res) => {
  await binanceService.getBinanceBTCApi(req, res);
}

exports.getBinanceETHPrice = async (req, res) => {
  await binanceService.getBinanceETHApi(req, res);
}

exports.getBinanceXRPPrice = async (req, res) => {
  await binanceService.getBinanceXRPApi(req, res);
}