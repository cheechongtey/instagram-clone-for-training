const { mergeResolvers } = require("@graphql-tools/merge");
const User = require("./user.resolver");
const Post = require("./post.resolver");
const Story = require("./story.resolver");
const { GraphQLUpload } = require("graphql-upload");

const resolver = {
    Upload: GraphQLUpload,
    ...Post,
    ...User,
    ...Story,
};

module.exports = resolver;
