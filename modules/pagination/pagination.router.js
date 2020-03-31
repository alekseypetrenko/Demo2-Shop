const { Router } = require("express");
const paginationController = require("./pagination.controller");

const router = new Router();


router.get("/:id", paginationController.searchAndFilter)

module.exports = router;