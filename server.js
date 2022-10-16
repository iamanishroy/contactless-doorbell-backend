const express = require("express");
const PORT = process.env.PORT || 9595;
const api = require('./api.routes');

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
    res.status(200).json({ message: "API Up and Running!!!" });
});

app.use("/", api);

app.listen(PORT, () => {
    console.log("API Server is running on port: " + PORT)
});