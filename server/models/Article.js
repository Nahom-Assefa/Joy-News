const { Schema, model } = require("mongoose");
const commentSchema = require('./Comment');

const articleSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },

  comments: [commentSchema]
});



module.exports = articleSchema
