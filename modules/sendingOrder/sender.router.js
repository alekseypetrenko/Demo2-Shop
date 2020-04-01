const { Router } = require("express");
const senderController = require("./sender.controller");
const router = new Router();

router.post("/", senderController.sendEmailMy);

module.exports = router;