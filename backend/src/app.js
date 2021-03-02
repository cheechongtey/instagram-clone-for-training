const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const config = require("./config/config");
const jwt = require("jsonwebtoken");

var corsOptions = {
    origin: config.frontend_url,
    optionsSuccessStatus: 200, // For legacy browser support
};

const posts = [
    {
        username: "cc",
        name: "Tey Chee Chong",
        age: "26",
    },
    {
        username: "jennifer",
        name: "Jennifer Lau Ling Ling",
        age: "26",
    },
];

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.use(express.static("public"));

app.get("/posts", verifyAuthenticate, function (req, res) {
    const filter = posts.filter((x) => x.username === req.user.username);
    res.json(filter);
});

function verifyAuthenticate(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, config.jwt.access_token_scrt, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = app;
