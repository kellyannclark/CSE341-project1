const router = require("express").Router(); //requires Express router

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
    //#swagger.tags = ["Hello World"]
    res.send("Hello World");
}); // GET request and responds with Hello World

router.use("/users", require("./users"));

module.exports = router;
