const schema = `
    extend type Query {
        users(_id : ID, username : String): [User]
    }
    type User {
        _id: ID!
        username: String
        email: String
        name: String
        avatar: String
        posts: [Post]
    }

    extend type Mutation {
        createUser(param : CreateUserInput) : User
    }

    input CreateUserInput{
        username : String!
        email : String!
        password : String!
        name: String
        avatar: [Upload!]
    }
`;

module.exports = schema;
