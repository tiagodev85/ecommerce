const ProductController = require("./controllers/ProductController");
const SessionController = require("./controllers/Sessions");
const UserController = require("./controllers/UserController");

const router = require("express").Router();

router.get("/", (req, res) => {
  return res.status(200).json({ msg: "rota raiz ok" });
});
// USERS
router.post("/users", UserController.createUser);
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById);
router.post("/sessions", SessionController.createSession);
// PRODUCTS
router.post("/products/:user_id", ProductController.addProduct);
router.get("/products", ProductController.getProdutcts);


module.exports = router;
