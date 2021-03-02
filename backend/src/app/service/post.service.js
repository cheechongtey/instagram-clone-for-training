const { models : {Post} } = require('../model');

const PostService = {
  async getPost({ filter, options }) {
    try {
      const post = await Post.paginate(filter, { ...options });

      return { result: { post }, error: 0, message: 'Successfully retrieve data' };
    } catch (error) {
      return { result: [], error: 1, message: 'Failed to retrieve data' };
    }
  },
};

module.exports = PostService;
