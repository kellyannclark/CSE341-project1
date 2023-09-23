const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users"); //this tells server where to get all users

router.get("/", usersController.getAll); //get request that gets all users from route

router.get("/:id", usersController.getSingle); //get request that gets single user by id:



module.exports = router;
