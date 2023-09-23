const router = require("express").Router(); //requires express router

router.get("/", (req, res) => { res.send("Hello World");}); //GET request and responds with Hello World

router.use("/users", require("./users"));

module.exports = router;