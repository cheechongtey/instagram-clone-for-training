const express = require("express");
const router = express.Router();
const controler = require("../app/controller/Api/ArticleController");

// Middleware
router.use(function timeLog(req, res, next) {
    next();
});

router.post("/test-post", (req, res) => {
    return controler.getArticleList(req, res);
});

module.exports = router;
