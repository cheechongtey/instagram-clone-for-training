const schema = `
    extend type Query {
        stories(id: ID, user_id: ID): [Stories]
    }
    type Stories {
        _id: ID!
        user: User!
        group: [String]
        medias: [String!]
        user_mentions: [User!]
        tags: [HashTag]
        location: Location
        status: String!
        expiredAt: Date
        count: String
    }

    type HashTag {
        value: String
    }

    type Medias {
        url: String
    }
`;

module.exports = schema;
