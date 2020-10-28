const Datastore = require("nedb-promise");
const users = new Datastore({ filename: "./db/users.db", autoload: true });
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = {
  async register({ username, password, repeatPassword }) {
    if (username == "" || password == "" || repeatPassword == "") return;
    if (password !== repeatPassword) return;
    const user = await users.findOne({ username });
    if (user) return;
    await users.insert({
      username,
      password: await bcryptjs.hash(password, 10),
    });
    return true;
  },
  async login({ username, password }) {
    if (username == "" || password == "") return;
    const user = await users.findOne({ username });
    if (!user) return;
    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) return;
    const token = jwt.sign(
      {
        userID: user._id,
        username,
      },
      process.env.SECRET
    );
    return {
      username: user.username,
      token,
    };
  },
};
