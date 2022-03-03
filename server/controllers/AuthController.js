import { createSalt, createSaltePassword } from "./HashFunctions";
const models = require("./../models");
const jwt = require("jsonwebtoken");

module.exports = {
  localSignIn: async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await models.User.findOne({
      where: { email: email, password: password },
    });

    res.json({ code: 200 });
  },
};
