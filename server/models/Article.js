const { Schema, model } = require("mongoose");

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
});



export default articleSchema
