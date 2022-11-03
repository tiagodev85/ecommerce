const User = require("../../models/User");

const UserController = {
  async createUser(req, res) {
    const { username } = req.body;
    try {
      const newUser = await User.create({
        username,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json(err);
    }
  },
};

module.exports = UserController;
