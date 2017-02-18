// require prerender and define get prerender tokens
// const prerender = require('prerender-node');
// const settings = Meteor.settings.prerender;
//
// // tell prerender to fetch page
// if (settings && settings.token) {
//     prerender.set('prerenderToken', settings.token);
//     WebApp.rawConnectHandlers.use(prerender);
// }
//
// // imports only methods
// import '../imports/server/methods/methods.js';




import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { typeDefs } from '/imports/api/schema';
import { resolvers } from '/imports/api/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});
