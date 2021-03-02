const app = require("./app");
const config = require("./config/config");
const logger = require("./config/logger");
const { connectDB } = require("./app/model/index");
const { graphqlHTTP } = require("express-graphql");
const { altairExpress } = require("altair-express-middleware");
const { errorType } = require("./utils/utils");
const { graphqlUploadExpress } = require("graphql-upload");
const bodyParser = require("body-parser");
const schema = require("./app/gql/schema/index.schema");
const resolvers = require("./app/gql/resolver/index.resolver");
const jwt = require("jsonwebtoken");
let server;

const refreshTokenDB = [];

app.use(
    "/graphql",
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
    (req, res) => {
        graphqlHTTP({
            schema: schema,
            rootValue: resolvers,
            graphiql: true,
            customFormatErrorFn: (err) => {
                const error = errorType[err.message];
                return {
                    message: error?.message || err.message,
                    statusCode:
                        error?.statusCode ||
                        errorType["SERVER_ERROR"].statusCode,
                    locations: err?.locations || [],
                };
            },
        })(req, res);
    }
);

app.use(
    "/altair",
    altairExpress({
        endpointURL: "/graphql",
    })
);

app.post("/token", function (req, res) {
    const token = req.body.refreshToken;

    if (!token) return res.sendStatus(401);
    if (!refreshTokenDB.includes(token)) return res.sendStatus(403);

    jwt.verify(token, config.jwt.refresh_token_scrt, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = generateAccessToken(user);

        res.json({ accessToken });
    });
});

app.post("/login", function (req, res) {
    const username = req.body.username;
    const user = {
        username,
    };

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, config.jwt.refresh_token_scrt);

    refreshTokenDB.push(refreshToken);

    res.json({ accessToken, refreshToken });
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

function generateAccessToken(user) {
    return jwt.sign(user, config.jwt.access_token_scrt, { expiresIn: "50s" });
}

connectDB().then(() => {
    logger.info("Connected to MongoDB");
    server = app.listen(config.auth_port, () => {
        logger.info(`Listening to port ${config.auth_port}`);
    });
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info("Server closed");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error.message);
    logger.error("Server is closing now.....");
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
