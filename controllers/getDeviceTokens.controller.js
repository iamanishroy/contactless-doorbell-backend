const db = require('./../model/tokenStore');

const getDeviceTokens = async (_, res) => {
    var data;
    try {
        data = await db.getData("/tokens")
    } catch (e) {
        console.log(e)
    }
    res.json({
        tokens: data || []
    });
}

module.exports = getDeviceTokens;