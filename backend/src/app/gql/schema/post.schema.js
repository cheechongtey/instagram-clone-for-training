const { GraphQLUpload } = require("graphql-upload");

const schema = `
  extend type Query {
    posts(_id : String): [Post]
  }
  type Post {
    _id: ID!
    title: String
    like: Boolean
    status: String
    user: User
    images: [PostImage!]
    location: Location
  }

  type PostImage {
    img_path: String!
  }

  extend type Mutation {
    createPosts(param : PostParam) : Post
    updatePosts(_id : String!, param : UpdatePostParam) : String
  }

  input MediaInput {
    img_path : Upload
  }

  input LocationInput {
    name : String!
  }

  input PostParam {
    title : String!
    user : String!
    images : [Upload!]
    location : LocationInput
  }

  input UpdatePostParam{
    status : String
    images : [Upload]
    title : String
    location : LocationInput
    user : String
  }
`;

module.exports = schema;
