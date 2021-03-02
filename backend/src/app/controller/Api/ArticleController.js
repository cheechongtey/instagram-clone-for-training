const service = require('../../service/post.service');
const { sendResponse, pick } = require('../../../utils/utils');

class ArticleController {
  async getArticleList(req, res) {
    // const { query, filter } = req.body;

    const params = {
      // filter: pick(filter, []),
      // options: pick(query, ['sortBy', 'limit', 'page']),
    };

    const result = await service.getPost(params);
    
    return res.status(200).json({
      ...result,
    });
    // return sendResponse(res, result);
  }
}

module.exports = new ArticleController();
