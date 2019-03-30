const { gql } = require('apollo-server-azure-functions');

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    post: Post
    author: Author
    posts: [Post]!
  }
`;

module.exports = typeDefs;
