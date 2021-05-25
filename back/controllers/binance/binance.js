const binanceService = require('../../service/binanceservice');

exports.getBinanceBTCPrice = async (req, res) => {
  binanceService.getBinanceBTCApi(req, res);
}

exports.getBinanceETHPrice = async (req, res) => {
  binanceService.getBinanceETHApi(req, res);
}

exports.getBinanceXRPPrice = async (req, res) => {
  binanceService.getBinanceXRPApi(req, res);
}