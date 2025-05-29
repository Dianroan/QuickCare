
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

app.get("/hola", (req, res) => {
    logger.info("Hello from QuickCare Backend!", {structuredData: true});
    res.send("Hello from QuickCare Backend!");
}
);

exports.app = onRequest(app);
