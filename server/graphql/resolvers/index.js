const postsResolvers = require('./post');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');
const datosDiariosResolvers = require('./datosDiarios');

module.exports = {
  Post: {
    likeCount: parent => parent.likes.length,
    commentCount: parent => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
    ...datosDiariosResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
