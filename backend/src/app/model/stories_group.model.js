const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const storySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    stories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'stories',
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
    collection: 'storiesGroup',
  }
);

storySchema.plugin(toJSON);

const StoryGroup = mongoose.model('storiesGroup', storySchema);

module.exports = StoryGroup;
