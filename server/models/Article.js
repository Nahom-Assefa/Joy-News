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

const Article = model("Article", articleSchema);

export default Article;
