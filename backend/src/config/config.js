const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVars = process.env;

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.RESOURCE_PORT,
    auth_port: envVars.AUTH_PORT,
    frontend_url: envVars.FRONTEND_URL,
    resolver_url: path.join(__dirname, "../app/gql/resolver"),
    schema_url: path.join(__dirname, "../app/gql/schema"),

    mongoose: {
        url: envVars.MONGODB_URL,
        options: {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
    },
    jwt: {
        access_token_scrt: envVars.ACCESS_TOKEN_SECRET,
        refresh_token_scrt: envVars.REFRESH_TOKEN_SECRET,
        accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
        refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
        resetPasswordExpirationMinutes: 10,
    },
};
