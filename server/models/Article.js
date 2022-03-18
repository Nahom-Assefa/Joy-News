const { Schema, model } = require("mongoose");
const commentSchema = require('./Comment');

const articleSchema = new Schema(
  {
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
},
{
  toJSON: {
    getters: true
  },
}
);

const Article = model('Article', articleSchema);

module.exports = Article;


// const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
// const dateFormat = require('../utils/dateFormat');

// const thoughtSchema = new Schema(
//   {
//     thoughtText: {
//       type: String,
//       required: 'You need to leave a thought!',
//       minlength: 1,
//       maxlength: 280
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: timestamp => dateFormat(timestamp)
//     },
//     username: {
//       type: String,
//       required: true
//     },
//     reactions: [reactionSchema]
//   },
//   {
//     toJSON: {
//       getters: true
//     }
//   }
// );

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

// const Thought = model('Thought', thoughtSchema);

// module.exports = Thought;
