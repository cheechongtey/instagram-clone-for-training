const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const storySchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    story_group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'storiesGroups',
    },
    medias: {
      type: String,
      default: '',
    },
    user_mentions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    hashtag: {
      type: Array,
      default: [],
    },
    location: {
      type: String,
      default : null
    },
    status: {
      type: String,
      default: 'A',
    },
    expiredAt: {
      type: Date,
      default: new Date(Date.now() + 3600 * 1000 * 24),
    },
  },
  {
    timestamps: true,
    collection: 'stories',
  }
);

storySchema.plugin(toJSON);

const Story = mongoose.model('stories', storySchema);

module.exports = Story;
