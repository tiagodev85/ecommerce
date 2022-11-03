const User = require("../../models/User");
const bcrypt = require("bcrypt");

const SessionController = {
  async createSession(req, res) {
    try {
      const { username, password } = req.body;

      // VALIDAÇÕES
      if (!username) {
        return res.status(442).json({ msg: "username is required" });
      }
      if (!password) {
        return res.status(442).json({ msg: "password is required" });
      }

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ msg: `user ${email} not found` });
      }

      // VALIDANDO PASSWORD
      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        return res.status(422).json({ msg: "password is not valid" });
      } else {
        return res.status(200).json(user);
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

module.exports = SessionController;
