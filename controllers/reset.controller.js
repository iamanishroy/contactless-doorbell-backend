const db = require('./../model/tokenStore');

const resetTokens = async (_, res) => {
    await db.delete("/tokens");
    res.status(200).json({
        message: "All device tokens deleted!"
    });
}

module.exports = resetTokens;