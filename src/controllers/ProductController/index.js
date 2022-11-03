const Product = require("../../models/Product");

const ProductController = {
  async addProduct(req, res) {
    try {
      const {
        productName,
        productDescription,
        productPrice,
        productQuantity,
        productImage,
      } = req.body;
      const user_id = req.params.user_id;

      // VALIDAÇÕES
      if (!productName) {
        return res.status(442).json({ msg: "productName is required" });
      }
      if (!productDescription) {
        return res.status(442).json({ msg: "productDescription is required" });
      }
      if (!productPrice) {
        return res.status(442).json({ msg: "productPrice is required" });
      }
      if (!productQuantity) {
        return res.status(442).json({ msg: "productQuantity is required" });
      }

      const data = {
        username: user_id,
        productName,
        productDescription,
        productPrice,
        productQuantity,
        productImage,
      }
      const newProduct = await Product.create(data);

      await newProduct.populate("username")

      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async getProdutcts(req, res) {
    try {
      const products = await Product.find().populate("username");            

      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async getUserById(req, res) {
    const user_id = req.params.id;
    try {
      const user = await User.findById(user_id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

module.exports = ProductController;
