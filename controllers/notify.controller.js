const db = require('./../model/tokenStore');

const PUSHY_API_KEY = '82a279343de8e334357900aec964ff2954942eae34710046ecaddaaae9912ce6'

const notify = async (req, res) => {
    const message = req.body.msg;
    // const id = req.body.id;

    if (!message) {
        return res.sendStatus(400);
    }

    var pushyAPI = new Pushy(PUSHY_API_KEY);

    var data = {
        message: message
    };
    let tokens;
    try {
        tokens = await db.getData("/tokens");
    } catch (exp) {
        return res.sendStatus(500);
    }

    var options = {};

    pushyAPI.sendPushNotification(data, tokens, options, function (err, id) {
        // Log errors to console 
        if (err) {
            return console.log('Fatal Error', err);
        }

        // Log success 
        console.log('Push sent successfully! (ID: ' + id + ')');
    });

    res.status(200).json({
        message: "Notification sent!"
    });
}

module.exports = notify;