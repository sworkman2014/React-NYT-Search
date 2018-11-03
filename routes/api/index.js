const router = require("express").Router();
const articleRoutes = require("./articles");
const articleController = require("../../controllers/articleController");


// Article Routes
router.use("/articles", articleRoutes);

// /api/saved
router.route("/saved")
    .post(articleController.saveArticle);

module.exports = router;