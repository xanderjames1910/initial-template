const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    nombre: String!
    cedula: String!
    telefono: String!
    username: String!
    email: String!
    perfil: String!
    direccion: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    nombre: String!
    cedula: String!
    telefono: String!
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
    perfil: String!
    direccion: String!
  }
  type dataDiaria {
    id: ID!
    COMPLETAMIENTO: String!
    FECHA: String!
    PD_HRS_PROD: Int!
    PD_PETROLEO: Float!
    PD_GAS: Float!
    PD_AGUA: Float!
    # createdAt: String!
    # updatedAt: String!
  }
  type Query {
    getPosts(filter: String): [Post]
    getPost(postId: ID!): Post
    getDataDiaria: [dataDiaria]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription {
    newPost: Post!
  }
`;
