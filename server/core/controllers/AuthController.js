const path = require("path");
const strings = require("../Strings");
const User = require("../services/User");

module.exports = {
  home(req, res) {
    return res.sendFile(path.join(__dirname, "../../../public/index.html"));
  },
  register: (req, res) =>
    User.exists({ email: req.body.email })
      .then(() => res.boom.badData("Email already in used."))
      .catch(() =>
        User.register(req.body).then(
          user => res.status(201).json(user),
          error => res.boom.badImplementation(error)
        )
      ),
  login: (req, res) => {
    const { email, password } = req.body;

    return User.login(email, password).then(
      user => res.status(200).json(user),
      error => res.boom.unauthorized(error)
    );
  },
  generateToken(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
      return User.login(username, password).then(
        user => res.json({ token: User.getToken(user) }),
        error => res.boom.unauthorized(error)
      );
    }
    return res.boom.unauthorized();
  },
  me(req, res) {
    res.json(req.user);
  }
};
