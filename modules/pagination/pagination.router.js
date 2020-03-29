const { Router } = require("express");

const pagination = new Router();

pagination.get("/", (req, res, next) => {
    res.send("next");
})

pagination.get("/", (req, res, next) => {
    res.send("prev");
})

module.exports = pagination;