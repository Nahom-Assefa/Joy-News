const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedArticle: [Article]
    friends: [User]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
}

type Article {
    _id: ID
    title: String
    description: String
    url: String
    content: String
    image: String
}

type Comment {
  _id: ID
  commentText: String
  createdAt: String
  username: String
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addFriend(friendsId: ID!): User
  savedArticle(article: SavedArticleInput): User
  deleteArticle(articleId: ID!): User 
  addComment(articleId: ID!, commentText: String!): Article
}

  type Auth {
    token: ID!
    user: User
  }

  input SavedArticleInput {
    content:String
    description: String
    articleId: String
    image: String
    url: String
    title: String
}
`;
module.exports = typeDefs;

