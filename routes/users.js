const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users"); //this tells server where to get all users


router.get("/:id", usersController.getSingle); //get request that gets single user by id:

router.get("/", usersController.getAll); //get request that gets all users from route

router.post("/", usersController.createUser); //post to create a new user in the database

router.put("/:id", usersController.updateUser); //update a current user in the database

router.delete("/:id", usersController.deleteUser); //delete a current user in the database



module.exports = router;
