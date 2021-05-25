const axios = require('axios');

exports.getBinanceBTCApi = (req, res) => {
    console.log('binance btc service');
    axios.get('https://www.binance.com/api/v3/ticker/price')
    .then( (response) => {
        // console.log(response);
        console.log('getbtcservice');
    })
    .catch(console.error('get btc error'))

    res.json('success BTC API')
}

exports.getBinanceETHApi = (req, res) => {
    axios.get('https://www.naver.com')
    .then(console.log('geteth'))
    .catch(console.error('get eth error'))
}

exports.getBinanceXRPApi = (req, res) => {
    axios.get('https://www.naver.com')
    .then(console.log('getxrp'))
    .catch(console.error('get xrp error'))
}

