const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
    .get(articleController.findAll)
    .post(articleController.saveArticle);

router
    .route("/:id")
    .get(articleController.findSavedArticles)
    .delete(articleController.remove);

    module.exports = router;
    