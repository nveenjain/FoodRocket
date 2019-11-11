const bcryptjs = require("bcryptjs");
const jwt = require("jwt-simple");
const pick = require("lodash/fp/pick");
const UserModel = require("../../model/User");
const strings = require("../../Strings");
const UserRepo = require("../../repositories/UserRepository");

const cfg = global.config();
const Promise = global.Promise;

class User {
  static getToken(user) {
    return jwt.encode(user, cfg.auth.jwt.secret);
  }

  static getSalt() {
    return bcryptjs.genSaltSync(10);
  }

  static generatePassword(password, salt) {
    return bcryptjs.hashSync(password, salt);
  }

  static find(clause) {
    return UserRepo.find(clause);
  }

  static exists(filter) {
    return UserRepo.exists(filter);
  }

  static update(condition, update) {
    UserRepo.update(condition, update);
  }

  static login(username, password) {
    return new Promise((resolve, reject) => {
      return User.exists({
        email: username
      }).then(
        user => {
          if (!user.status) {
            return reject(
              new Error(
                `Your account is not active, Please check your email ${user.email}`
              )
            );
          }

          if (!bcryptjs.compareSync(password, user.password)) {
            return reject(new Error("Username/Password didn't matched."));
          }

          const userInformation = pick(["_id", "email"])(user);
          return resolve({
            token: User.getToken(userInformation)
          });
        },
        () => reject(new Error("No User found."))
      );
    });
  }

  static register({ email, password, first_name, last_name }) {
    const salt = User.getSalt();
    let newPassword;
    if (password) {
      newPassword = User.generatePassword(password, salt);
    }
    const hash = bcryptjs.hashSync(email + Date.now(), salt);
    const registerInfo = {
      email,
      role: "user",
      password: newPassword,
      first_name,
      last_name,
      status: 1,
      hash
    };

    return new Promise((resolve, reject) =>
      UserModel.create(registerInfo, (error, user) => {
        if (error) {
          return reject(new Error(strings.ADD_USER_ERROR));
        }

        const newUser = pick(["_id", "email"])(user);
        return resolve(newUser);
      })
    );
  }
}

module.exports = User;
