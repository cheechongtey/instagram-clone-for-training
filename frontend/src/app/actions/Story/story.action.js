import { gql } from "@apollo/client";

export const getStoryQuery = gql`
    query data {
        stories {
            _id
            medias
            expiredAt
            status
            count
            tags {
                value
            }
            user_mentions {
                username
            }
            location {
                name
                lng
                lat
            }
            user {
                username
                avatar
                name
            }
        }
    }
`;
