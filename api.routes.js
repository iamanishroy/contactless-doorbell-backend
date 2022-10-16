const express = require("express");
const fileUpload = require("express-fileupload");

const addDeviceToken = require("./controllers/addDeviceToken.controller");
const getDeviceTokens = require("./controllers/getDeviceTokens.controller");
const notify = require("./controllers/notify.controller");
const resetTokens = require("./controllers/reset.controller");
const uploadImage = require("./controllers/uploadImage.controller");

const router = express.Router();

router.get("/get-token", getDeviceTokens);
router.post("/add-token", addDeviceToken);
router.delete("/reset-token", resetTokens);
router.post("/notify", notify);
router.post('/upload-image/:id', fileUpload({ createParentPath: true }), uploadImage);

module.exports = router;