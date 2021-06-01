const binanceService = require('../../service/binanceservice');

const func = {
  getBinanceBTCPrice : async (req, res) => {
    binanceService.getBinanceBTCApi(req, res);
  },
  
  getBinanceETHPrice : async (req, res) => {
    binanceService.getBinanceETHApi(req, res);
  },
  
  getBinanceXRPPrice : async (req, res) => {
    binanceService.getBinanceXRPApi(req, res);
  }
}



module.exports = func;