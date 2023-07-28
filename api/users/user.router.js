const { createUser, getUserById, getUsers, updateUsers, deleteUser } = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.patch("/", updateUsers);
router.delete("/", deleteUser);
router.post("/login", );

module.exports = router;