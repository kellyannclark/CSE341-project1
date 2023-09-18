const mongodb = require("../data/database");
const ObjectID = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection("users").find();
    result.toArray().then((users) => {
       res.setHeader("Content-Type", "application/json");
       res.status(200).json(users);
    });
}

const getSingle = async (req, res) => {
    try {
        const userId = new ObjectID(req.params.id);

        if (!userId) {
            res.status(400).json({ error: "Invalid user ID" });
            return;
        }

        const user = await mongodb.getDatabase().db().collection("users").findOne({ _id: userId });

        if (user) {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};



module.exports = {
    getAll,
    getSingle
};