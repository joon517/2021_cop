const upbitService = require('../../service/upbitservice');

const func = {
  getUpbitBTCPrice: async (req, res) => {
    await upbitService.getUpbitBTCPrice(req, res);
  },

  getUpbitETHPrice: async (req, res) => {
    await upbitService.getUpbitETHPrice(req, res);
  },

  getUpbitXRPPrice: async (req, res) => {
    await upbitService.getUpbitXRPPrice(req, res);
  },

  getUpbitAccount: async (req, res) => {
    await upbitService.getUpbitAccount(req, res);
  },

  upbitInit: async (req, res) => {
    await upbitService.upbitInit(req, res);
  },

  getUpbitOrderChance: async (req, res) => {
    await upbitService.getOrderChanceKRWBTC(req, res);
  },
}

module.exports = func