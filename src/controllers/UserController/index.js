const User = require("../../models/User");
const bcrypt = require("bcrypt");

const UserController = {
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;      

      // VALIDAÇÕES
      if (!username) {
        return res.status(442).json({ msg: "username is required" });
      }
      if (!email) {
        return res.status(442).json({ msg: "email is required" });
      }
      if (!password) {
        return res.status(442).json({ msg: "password is required" });
      }

      // CHECANDO USUÁRIO CADASTRADO
      const user = await User.findOne({ email });
      if (user) {
        return res
          .status(422)
          .json({ msg: `user ${email} is already registered` });
      }

      // CRIANDO SENHA FORTE
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      // CRIANDO USUÁRIO
      const newUser = await User.create({
        username,
        email,
        password: passwordHash,
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
