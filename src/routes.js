const UserController = require("./controllers/UserController");

const router = require("express").Router();

router.get("/", (req, res) => {
  return res.status(200).json({ msg: "rota raiz ok" });
});
// USERS
router.post("/users", UserController.createUser);
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById);

module.exports = router;
