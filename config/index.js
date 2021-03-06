/**
 * Structure
 * {
 *     [your huobi id for pro]:{
 *        hopePosition:{
 *            [coinName]: [position]
 *        },
 *        tradeFee: [fee],
 *        baseCoin: [coinName]
 *     }
 * }
 * 
 * eg. 
 * {
 *     "2122321":{
 *        hopePosition:{
 *           'btc': 0.1,
 *           'eth': 0.1
 *        },
 *        tradeFee: 0.002,
 *        baseCoin: 'usdt'
 *     }
 * }
 */

module.exports = {
    accountId: '4355134',
    hopePosition: {
        'btc': 0.39,
        'eth': 0.39,
        'zec': 0.075,
        'dash': 0.075,
    },
    tradeFee: 0.002,
    positionPerAdd: 0.05,
    positionFirstAdd: 0.25,
    baseCoin: 'usdt'
}