const { buildSchema } = require("graphql");
const { GraphQLScalarType } = require("graphql");

const postSchema = require("./post.schema");
const userSchema = require("./user.schema");
const storySchema = require("./story.schema");
const locationSchema = require("./location.schema");

const defaultSchema = `
    scalar Date
    scalar Upload
    
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    type Subscription {
        _: Boolean
    }

    schema {
      query : Query
      mutation : Mutation
    }
`;

const rootSchema = buildSchema(
    `${defaultSchema} ${userSchema} ${postSchema} ${storySchema} ${locationSchema}`
);

module.exports = rootSchema;
