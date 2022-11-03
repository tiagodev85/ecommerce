const UserController = require("./controllers/UserController");

const router = require("express").Router();

router.get("/", (req, res) => {
  return res.status(200).json({ msg: "rota raiz ok" });
});
// USERS
router.post("/users", UserController.createUser);
router.get("/users");
router.get("/users/:user_id");
// router.post("/login");
// PRODUCTS
// router.post("/products/:user_id");
// router.patch("/products/:user_id/:product_id");
// router.get("/products/:user_id");
// router.get("/products/:product_id");
// router.get("/products");
// router.delete("/products/:user_id/:product_id");
// CARTS
// router.post("/carts/:user_id");
// router.get("/carts/:user_id");
// router.get("/carts/:user_id/:cart_id");

module.exports = router;
