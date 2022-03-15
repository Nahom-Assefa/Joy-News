const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedArticle: [Article]

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
    image:String
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  savedArticle(title: String!, description: String! url: String! content: String! image:String!):User
  
}
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;

// create type Article
// deleteArticle(articleId: articleId): User