const { Router } = require("express");
const { pagination } = require("./pagination.controller");

const router = new Router();

router.get("/", pagination.pagination)


module.exports = router;