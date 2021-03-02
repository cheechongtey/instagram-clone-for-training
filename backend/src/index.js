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
let server;

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

connectDB().then(() => {
    logger.info("Connected to MongoDB");
    server = app.listen(config.port, () => {
        logger.info(`Listening to port ${config.port}`);
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
