const db = require('./../model/tokenStore');

const addDeviceToken = async (req, res) => {
    const id = req.body.id;

    if (!id) {
        return res.sendStatus(400);
    }
    let tokens;

    try {
        tokens = await db.getData("/tokens");
    } catch (exp) {
        tokens = [];
    }
    // console.log(tokens);

    let result = tokens.find(token => token === id);
    if (result == undefined) {
        tokens.push(id);
    }
    await db.push("/tokens", tokens);

    tokens = await db.getData("/tokens");
    console.log(tokens);

    res.status(201).json({
        message: "Success"
    });
}

module.exports = addDeviceToken;