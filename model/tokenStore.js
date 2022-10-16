const { JsonDB, Config } = require("node-json-db");

const db = new JsonDB(new Config("tokenStore", true, false, '/'));

module.exports = db;
