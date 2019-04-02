const { ApolloServer } = require('apollo-server-azure-functions');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
require('./db').connect();

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server.createHandler();
