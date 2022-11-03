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
      return res.status(400).json(error);
    }
  },
  async getUsers(req, res) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
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

module.exports = UserController;
