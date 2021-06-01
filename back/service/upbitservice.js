const axios = require('axios');
const { uuid } = require('uuidv4');
const sign = require('jsonwebtoken').sign
const queryEncode = require('querystring').encode
const crypto = require('crypto')


const AccessKey = `MxeD38maMKcYnCL7KO1vWMOF6EuF60jBoXy4wIXM`
const SecretKey = `xPAKWhNIcrW9JhuUrVLCxamDjyxUEn2f414KDvSE`


const body = {
    market: 'KRW-BTC'
}

const query = queryEncode(body)

const hash = crypto.createHash('sha512')
const queryHash = hash.update(query, 'utf-8').digest('hex')

const payload = {
    access_key: AccessKey,
    nonce: uuid(),
    query_hash: queryHash,
    query_hash_alg: 'SHA512',
}
const token = sign(payload, SecretKey);

exports.getUpbitBTCPrice = async (req, res) => {
    var Coins = []
    var moveCoins = []
    axios.get('https://api.upbit.com/v1/market/all?isDetails=false')
        .then(response => {
            for (var coin of response.data) {
                if (coin.market.substr(0, 3) === 'KRW') {
                    // console.log('push', coin)
                    // Coins.push({ 
                    //     'market': coin.market, 
                    //     'korean_name': coin.korean_name, 
                    //     'english_name': coin.english_name })
                    Coins.push(coin.market)
                }
            }
        })
        .then( () => {
            console.log('Coins', Coins)
            var sign
            var diff = 0
            for(var i =0; i<Coins.length;i++){
                // 각 코인별로 10분전과 비교해서 5퍼센트 이상 차이나면 출력
                axios.get(`https://api.upbit.com/v1/candles/minutes/1?market=${Coins[i]}&count=11`)
                .then( response => {
                    setTimeout(() => {
                        var start = response.data[0].opening_price;
                        var end = response.data[10].opening_price;
                        
                        console.log('코인 종류 ', response.data[0].market)
                        console.log('기준 시작 ', start)
                        console.log('기준 마지막 ', end)

                        if(start>end){
                            sign = -1
                            diff = (start - end) / start * 100
                            // console.log('감소', (start - end) / start * 100)
                        }
                        else if(start < end){
                            sign = 1
                            diff = (end - start) / start * 100
                            // console.log('상승',(end - start) / start * 100)
                        }
                        else if(start === end){
                            sign = 0
                            // console.log('Same')
                        }

                        if(diff > 0.05){
                            moveCoins.push({
                                'market' : response.data[0].market,
                                'sign' : sign,
                                'diff' : diff
                            })
                        }
                    }, 500)
                })
                .catch(err => {
                    console.error(err)
                })
            }
            
        })
        .catch(err => {
            console.error(err);
        })
        res.json(moveCoins)
}

exports.getUpbitETHPrice = async (req, res) => {
    axios.get('https://www.naver.com')
        .then(console.log('geteth'))
        .catch(console.error('get eth error'))
}

exports.getUpbitXRPPrice = async (req, res) => {
    axios.get('https://www.naver.com')
        .then(console.log('getxrp'))
        .catch(console.error('get xrp error'))
}

// 내 계좌 조회하기 
// 뭐를 얼만큼 들고있는지 조회
exports.getUpbitAccount = async (req, res) => {
    axios.get('https://api.upbit.com/v1/accounts?'.concat(query), {
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: body
    })
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            res.status(404).send(err)
        })
}

// KRW-BTC 시장에서 주문 가능 정보 조회
exports.getOrderChanceKRWBTC = async (req, res) => {
    axios.get('https://api.upbit.com/v1/orders/chance?'.concat(query), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            res.status(404).send(err)
        })
}

// 처음 10분 데이터를 만들기 위한 init 작업
exports.upbitInit = async (req, res) => {

}