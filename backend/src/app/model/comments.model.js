const mongoose = require('mongoose');
const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    article_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'articleMasters',
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'A',
    },
  },
  {
    timestamps: true,
    collection: 'articleComments',
  }
);

const Comments = mongoose.model('articleComments', commentSchema);

module.exports = Comments;
